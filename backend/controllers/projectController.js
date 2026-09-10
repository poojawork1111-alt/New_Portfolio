import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { isMongoConnected } from '../config/db.js';
import { Project } from '../models/Project.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'data');

const readProjectsFromJson = () => {
  const filePath = path.join(dataDir, 'projects.json');
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
};

export const getProjects = async (req, res) => {
  try {
    const { category } = req.query;

    if (isMongoConnected()) {
      let filter = {};
      if (category && category.toLowerCase() !== 'all') {
        filter = { category: new RegExp(`^${category}$`, 'i') };
      }
      const projects = await Project.find(filter).sort({ id: 1 });
      return res.json(projects);
    }

    // Fallback to JSON file
    let projects = readProjectsFromJson();
    if (category && category.toLowerCase() !== 'all') {
      projects = projects.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }
    return res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to retrieve projects' });
  }
};
