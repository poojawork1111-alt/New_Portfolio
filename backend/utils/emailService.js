import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Sends notification emails when a contact form is submitted.
 * Gracefully falls back if SMTP credentials are not configured.
 */
export const sendContactNotification = async ({ name, email, subject, message, submissionId }) => {
  const emailUser = (process.env.EMAIL_USER || process.env.SMTP_USER || '').trim();
  const rawPass = process.env.EMAIL_PASS || process.env.SMTP_PASS || '';
  // Strip spaces from Google App Password if pasted as "xxxx xxxx xxxx xxxx"
  const emailPass = rawPass.replace(/\s+/g, '').trim();
  const recipient = (process.env.NOTIFICATION_RECIPIENT || emailUser || 'poojawork1111@gmail.com').trim();

  if (!emailUser || !emailPass) {
    console.log('ℹ️  [Email Service] EMAIL_USER / EMAIL_PASS not set in .env. Skipping real-time email dispatch.');
    return { sent: false, reason: 'unconfigured' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // 1. Alert email to Pooja
    const alertMailOptions = {
      from: `"Portfolio Contact Alert" <${emailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `📬 [Portfolio Message] From ${name}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #7c3aed; margin-bottom: 8px;">New Contact Form Message</h2>
          <p style="color: #64748b; font-size: 14px;">Received on: ${new Date().toLocaleString()}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          
          <table style="width: 100%; font-size: 14px; line-height: 1.6;">
            <tr>
              <td style="width: 100px; color: #64748b; font-weight: bold;">Sender:</td>
              <td style="color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="color: #64748b; font-weight: bold;">Email:</td>
              <td><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
            </tr>
            <tr>
              <td style="color: #64748b; font-weight: bold;">Subject:</td>
              <td style="color: #0f172a;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #7c3aed;">
            <p style="margin: 0; color: #1e293b; white-space: pre-wrap; font-size: 15px;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
            Submission ID: ${submissionId} &bull; Stored securely in database/JSON.
          </p>
        </div>
      `,
    };

    // 2. Friendly acknowledgement auto-reply to Sender
    const replyMailOptions = {
      from: `"Pooja Patil" <${emailUser}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}! ♡`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #7c3aed; margin-top: 0;">Hi ${name},</h2>
          <p style="color: #334155; font-size: 15px; line-height: 1.6;">
            Thank you for reaching out through my portfolio website! I have received your message regarding <strong>"${subject}"</strong>.
          </p>
          <p style="color: #334155; font-size: 15px; line-height: 1.6;">
            I will review your message and get back to you as soon as possible.
          </p>
          
          <div style="margin: 20px 0; padding: 14px 18px; background-color: #f1f5f9; border-radius: 8px; font-size: 14px; color: #475569;">
            <em>"${message}"</em>
          </div>

          <p style="color: #334155; font-size: 15px; line-height: 1.6; margin-bottom: 4px;">
            Warm regards,
          </p>
          <p style="color: #7c3aed; font-weight: bold; font-size: 16px; margin: 0;">
            Pooja Patil
          </p>
          <p style="color: #64748b; font-size: 13px; margin: 2px 0 0 0;">
            Full Stack MERN Developer &bull; Hyderabad, Telangana
          </p>
        </div>
      `,
    };

    await transporter.sendMail(alertMailOptions);
    console.log(`✅ [Email Service] Alert email sent successfully to ${recipient}`);

    // Attempt auto-reply in background (non-blocking)
    transporter.sendMail(replyMailOptions).catch((err) => {
      console.warn(`⚠️ [Email Service] Auto-reply email could not be delivered: ${err.message}`);
    });

    return { sent: true };
  } catch (err) {
    console.error(`❌ [Email Service] Error dispatching email: ${err.message}`);
    return { sent: false, error: err.message };
  }
};
