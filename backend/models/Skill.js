import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
    },
    level: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    category: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: 'Code2',
    },
    section: {
      type: String,
      enum: ['frontend', 'backend', 'stateManagement', 'security', 'tools', 'other', 'databaseAndTools'],
      required: true,
      default: 'frontend',
    },
  },
  {
    timestamps: true,
  }
);

export const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);
