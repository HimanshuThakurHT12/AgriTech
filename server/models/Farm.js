import mongoose from 'mongoose';
const farmSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true, trim: true }, location: { type: String, required: true, trim: true },
  areaAcres: { type: Number, required: true, min: 0 }, establishedDate: Date,
  primaryCrop: { type: String, required: true, trim: true }, soilType: String, notes: String
}, { timestamps: true });
export default mongoose.model('Farm', farmSchema);
