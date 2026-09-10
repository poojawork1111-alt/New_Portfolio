import mongoose from 'mongoose';
import dns from 'dns';

// Resolve MongoDB Atlas SRV records reliably on Windows/local networks
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (dnsErr) {
  console.warn('⚠️ Could not set custom DNS servers:', dnsErr.message);
}

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.trim() === '') {
    console.log('ℹ️  MongoDB URI not set in .env.');
    console.log('📦 Running in local JSON storage mode (Fallback active).');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri);
    isConnected = true;
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    isConnected = false;
    console.warn(`⚠️ MongoDB connection error: ${error.message}`);
    console.log('📦 Continuing in local JSON storage mode (Fallback active).');
    return false;
  }
};

export const isMongoConnected = () => isConnected;
