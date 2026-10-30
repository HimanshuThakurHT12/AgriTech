import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, select: false },
  phone: { type: String, trim: true },
  role: { type: String, enum: ['farmer', 'admin'], default: 'farmer' },
  location: { type: String, trim: true }
}, { timestamps: true });
export default mongoose.model('User', userSchema);
