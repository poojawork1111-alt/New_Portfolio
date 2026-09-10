import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Sender name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Valid email is required'],
      trim: true,
      lowercase: true,
    },
    subject: {
      type: String,
      trim: true,
      default: 'No Subject',
    },
    message: {
      type: String,
      required: [true, 'Message body is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);
