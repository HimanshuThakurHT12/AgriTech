import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 }, unitPrice: { type: Number, required: true, min: 0 },
  totalAmount: { type: Number, required: true, min: 0 }, contactName: { type: String, required: true },
  email: { type: String, required: true }, phone: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'processing', 'on-the-way', 'delivered', 'cancelled'], default: 'pending' }
}, { timestamps: true });
export default mongoose.model('Booking', bookingSchema);
