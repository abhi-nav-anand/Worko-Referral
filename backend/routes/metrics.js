import express from 'express';

import Candidate from '../models/Candidate.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const total = await Candidate.countDocuments();
    const pending = await Candidate.countDocuments({ status: 'Pending' });
    const reviewed = await Candidate.countDocuments({ status: 'Reviewed' });
    const hired = await Candidate.countDocuments({ status: 'Hired' });
    res.json({ total, pending, reviewed, hired });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
