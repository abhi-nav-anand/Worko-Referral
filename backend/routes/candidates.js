import express from 'express';
import Candidate from '../models/Candidate.js';
import multer from 'multer';

const router = express.Router();

// Multer setup for PDF uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDF files are allowed!'));
  },
});

// GET /candidates
router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /candidates
router.post('/', (req, res, next) => {
  // Use multer only if a file is present
  const uploadMiddleware = upload.single('resume');
  uploadMiddleware(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // Multer error
      return res.status(400).json({ error: err.message });
    } else if (err) {
      // Custom error (e.g., file type)
      return res.status(400).json({ error: err.message });
    }
    next();
  });
}, async (req, res) => {
  try {
    const { name, email, phone, jobTitle } = req.body;
    if (!name || !email || !phone || !jobTitle) {
      return res.status(400).json({ error: 'All fields except resume are required.' });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }
    if (!/^\d{10,}$/.test(phone)) {
      return res.status(400).json({ error: 'Invalid phone number.' });
    }
    const candidate = new Candidate({
      name,
      email,
      phone,
      jobTitle,
      resumeUrl: req.file ? `/uploads/${req.file.filename}` : undefined,
    });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /candidates/:id/status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const candidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!candidate) return res.status(404).json({ error: 'Candidate not found' });
    res.json(candidate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /candidates/:id
router.delete('/:id', async (req, res) => {
  try {
    await Candidate.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
