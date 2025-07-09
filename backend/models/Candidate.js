import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  jobTitle: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  resumeUrl: String,
});

export default mongoose.models.Candidate || mongoose.model('Candidate', candidateSchema);
