import express from 'express';
import { isMongoConnected } from '../config/db.js';
import { getProjects } from '../controllers/projectController.js';
import { getSkills } from '../controllers/skillController.js';
import { submitContact, getMessages } from '../controllers/contactController.js';
import { getBlogs, getBlogBySlug } from '../controllers/blogController.js';

const router = express.Router();

// Health Check Endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: isMongoConnected() ? 'MongoDB (Connected)' : 'Local JSON Fallback',
    techStack: ['Node.js', 'Express.js', 'React.js', 'Tailwind CSS', 'MongoDB Atlas']
  });
});

// Projects API
router.get('/projects', getProjects);

// Skills API
router.get('/skills', getSkills);

// Blogs API
router.get('/blogs', getBlogs);
router.get('/blogs/:slug', getBlogBySlug);

// Contact API
router.post('/contact', submitContact);
router.get('/contact/messages', getMessages);

export default router;
