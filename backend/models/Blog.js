import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    paragraphs: [{ type: String, required: true }],
    language: { type: String, default: 'javascript' },
    codeSnippet: { type: String, default: '' },
    keyTakeaway: { type: String, default: '' },
  },
  { _id: false }
);

const blogSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, sparse: true },
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, default: '', trim: true },
    category: { type: String, required: true, trim: true },
    readTime: { type: String, default: '5 min read' },
    date: { type: String, default: '2026' },
    icon: { type: String, default: 'BookOpen' },
    badgeColor: { type: String, default: '' },
    tags: [{ type: String }],
    excerpt: { type: String, required: true },
    sections: [sectionSchema],
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
