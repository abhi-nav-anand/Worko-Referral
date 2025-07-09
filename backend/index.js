// import express from 'express';
// import fs from 'fs';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import multer from 'multer';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';
// import authRoutes from './routes/auth.js';
// import metricsRoutes from './routes/metrics.js';
// import candidateRoutes from './routes/candidates.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // For ES module __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// // Ensure uploads directory exists
// const uploadsDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(uploadsDir));


// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {})
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1);
//   });

// // Use candidate routes
// app.use('/candidates', candidateRoutes);

// app.use('/api/auth', authRoutes);
// app.use('/api/metrics', metricsRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import metricsRoutes from './routes/metrics.js';
import candidateRoutes from './routes/candidates.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// For ES module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(uploadsDir));

// ✅ Check for MONGO_URI env var
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not set in environment variables.");
  process.exit(1); // Stop server
}

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit on failure
  });

// Routes
app.use('/candidates', candidateRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/metrics', metricsRoutes);

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
