import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Project } from './models/Project.js';
import { Skill } from './models/Skill.js';
import { Blog } from './models/Blog.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, 'data');

const seedDatabase = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ Error: MONGODB_URI is not set in backend/.env!');
    console.log('Please set MONGODB_URI in backend/.env before running the seeder.');
    process.exit(1);
  }

  try {
    console.log('⏳ Connecting to MongoDB...');
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB.');

    // 1. Seed Projects
    const projectsRaw = fs.readFileSync(path.join(dataDir, 'projects.json'), 'utf-8');
    const projectsData = JSON.parse(projectsRaw);

    await Project.deleteMany({});
    console.log('🗑️  Cleared existing projects in MongoDB.');
    await Project.insertMany(projectsData);
    console.log(`✅ Seeded ${projectsData.length} projects into MongoDB.`);

    // 2. Seed Skills
    const skillsRaw = fs.readFileSync(path.join(dataDir, 'skills.json'), 'utf-8');
    const skillsData = JSON.parse(skillsRaw);

    const flatSkills = [];
    Object.keys(skillsData).forEach((section) => {
      skillsData[section].forEach((skill) => {
        flatSkills.push({
          ...skill,
          section: section,
        });
      });
    });

    await Skill.deleteMany({});
    console.log('🗑️  Cleared existing skills in MongoDB.');
    await Skill.insertMany(flatSkills);
    console.log(`✅ Seeded ${flatSkills.length} skills into MongoDB.`);

    // 3. Seed Technical Blogs
    const blogsPath = path.join(dataDir, 'blogs.json');
    if (fs.existsSync(blogsPath)) {
      const blogsRaw = fs.readFileSync(blogsPath, 'utf-8');
      const blogsData = JSON.parse(blogsRaw);

      await Blog.deleteMany({});
      console.log('🗑️  Cleared existing blogs in MongoDB.');
      await Blog.insertMany(blogsData);
      console.log(`✅ Seeded ${blogsData.length} technical articles into MongoDB.`);
    }

    console.log('\n🎉 MongoDB database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed with error:', error);
    process.exit(1);
  }
};

seedDatabase();
