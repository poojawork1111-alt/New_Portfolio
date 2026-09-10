import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { isMongoConnected } from '../config/db.js';
import { Skill } from '../models/Skill.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'data');

const readSkillsFromJson = () => {
  const filePath = path.join(dataDir, 'skills.json');
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
};

export const getSkills = async (req, res) => {
  try {
    if (isMongoConnected()) {
      const skillsList = await Skill.find();
      if (skillsList && skillsList.length > 0) {
        const grouped = skillsList.reduce((acc, skill) => {
          const section = skill.section || 'other';
          if (!acc[section]) acc[section] = [];
          acc[section].push(skill);
          return acc;
        }, {});
        return res.json(grouped);
      }
    }

    // Fallback to JSON file
    const skills = readSkillsFromJson();
    return res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Failed to retrieve skills' });
  }
};
