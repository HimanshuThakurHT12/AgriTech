import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 }, description: { type: String, required: true },
  imageUrl: String, stock: { type: Number, default: 0, min: 0 }, unit: { type: String, default: 'unit' },
  active: { type: Boolean, default: true }, createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
export default mongoose.model('Product', productSchema);
