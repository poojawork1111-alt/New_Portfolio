import mongoose from 'mongoose';
import dns from 'dns';

// Resolve MongoDB Atlas SRV records reliably on Windows/local networks
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (dnsErr) {
  console.warn('⚠️ Could not set custom DNS servers:', dnsErr.message);
}

let isConnected = false;
let cachedPromise = null;

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    isConnected = true;
    return true;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri || uri.trim() === '') {
    isConnected = false;
    return false;
  }

  if (cachedPromise) {
    try {
      await cachedPromise;
      isConnected = mongoose.connection.readyState === 1;
      return isConnected;
    } catch {
      cachedPromise = null;
    }
  }

  try {
    cachedPromise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    const conn = await cachedPromise;
    isConnected = true;
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    cachedPromise = null;
    isConnected = false;
    console.warn(`⚠️ MongoDB connection error: ${error.message}`);
    return false;
  }
};

export const isMongoConnected = () => mongoose.connection.readyState === 1;
