import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { isMongoConnected } from '../config/db.js';
import { Message } from '../models/Message.js';
import { sendContactNotification } from '../utils/emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'data');

const readMessagesFromJson = () => {
  const filePath = path.join(dataDir, 'messages.json');
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
};

const writeMessagesToJson = (data) => {
  const filePath = path.join(dataDir, 'messages.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message, _gotcha } = req.body;

    // 1. Anti-spam Honeypot Check:
    // If the invisible honeypot field is filled by a bot, silently succeed without storing or dispatching email
    if (_gotcha && _gotcha.trim() !== '') {
      console.warn(`[Anti-Spam Trap] Bot submission blocked from email: ${email || 'unknown'}`);
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been received successfully.',
        submissionId: 'honeypot-filtered',
      });
    }

    // 2. Input Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'A valid email address is required' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message content is required' });
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'No Subject').trim(),
      message: message.trim(),
    };

    let savedId = Date.now().toString();

    // 3. If MongoDB is connected, save directly to MongoDB
    if (isMongoConnected()) {
      try {
        const savedMessage = await Message.create(payload);
        savedId = savedMessage._id.toString();
        console.log(`[Contact API] Message saved to MongoDB (ID: ${savedId})`);
      } catch (dbErr) {
        console.warn('Could not save to MongoDB, saving to JSON fallback:', dbErr.message);
      }
    }

    // 4. Always persist to messages.json as well for local inspection/backup
    const messages = readMessagesFromJson();
    messages.unshift({
      id: savedId,
      ...payload,
      createdAt: new Date().toISOString(),
    });
    writeMessagesToJson(messages);

    console.log(`[Contact API] Received new message from ${payload.name} (${payload.email})`);

    // 5. Trigger real-time email notification (non-blocking)
    sendContactNotification({
      ...payload,
      submissionId: savedId,
    }).catch((emailErr) => {
      console.error('[Contact API] Background email error:', emailErr.message);
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully. I will get back to you soon! ♡',
      submissionId: savedId,
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    res.status(500).json({ error: 'Internal server error while saving message' });
  }
};

export const getMessages = async (req, res) => {
  try {
    if (isMongoConnected()) {
      const messages = await Message.find({}).sort({ createdAt: -1 }).lean();
      return res.json({
        source: 'mongodb',
        count: messages.length,
        data: messages,
      });
    }

    const messages = readMessagesFromJson();
    return res.json({
      source: 'local_fallback',
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error('Error in getMessages controller:', error);
    const messages = readMessagesFromJson();
    return res.json({
      source: 'local_fallback_on_error',
      count: messages.length,
      data: messages,
    });
  }
};
