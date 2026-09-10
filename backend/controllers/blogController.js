import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { isMongoConnected } from '../config/db.js';
import { Blog } from '../models/Blog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', 'data');

const getBlogsFromJson = () => {
  const filePath = path.join(dataDir, 'blogs.json');
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
};

export const getBlogs = async (req, res) => {
  try {
    if (isMongoConnected()) {
      const blogs = await Blog.find({}).sort({ id: 1 }).lean();
      return res.json({
        source: 'mongodb',
        count: blogs.length,
        data: blogs,
      });
    }

    const fallbackBlogs = getBlogsFromJson();
    return res.json({
      source: 'local_fallback',
      count: fallbackBlogs.length,
      data: fallbackBlogs,
    });
  } catch (error) {
    console.error('Error in getBlogs controller:', error);
    const fallbackBlogs = getBlogsFromJson();
    return res.json({
      source: 'local_fallback_on_error',
      count: fallbackBlogs.length,
      data: fallbackBlogs,
    });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    if (isMongoConnected()) {
      const blog = await Blog.findOne({ slug }).lean();
      if (blog) {
        return res.json({ source: 'mongodb', data: blog });
      }
    }

    const fallbackBlogs = getBlogsFromJson();
    const blog = fallbackBlogs.find((b) => b.slug === slug);

    if (!blog) {
      return res.status(404).json({ error: 'Article not found' });
    }

    return res.json({ source: 'local_fallback', data: blog });
  } catch (error) {
    console.error('Error in getBlogBySlug controller:', error);
    res.status(500).json({ error: 'Server error retrieving article' });
  }
};
