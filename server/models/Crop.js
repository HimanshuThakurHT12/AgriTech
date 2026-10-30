import mongoose from 'mongoose';
const cropSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  farm: { type: mongoose.Schema.Types.ObjectId, ref: 'Farm', required: true },
  name: { type: String, required: true, trim: true }, variety: String, areaAcres: { type: Number, min: 0 },
  plantedDate: Date, expectedHarvestDate: Date,
  stage: { type: String, enum: ['planned', 'planted', 'growing', 'flowering', 'ready', 'harvested'], default: 'planned' },
  healthStatus: { type: String, enum: ['healthy', 'attention', 'critical'], default: 'healthy' }, notes: String
}, { timestamps: true });
export default mongoose.model('Crop', cropSchema);
