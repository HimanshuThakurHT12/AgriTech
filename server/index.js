import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import farmRoutes from './routes/farm.routes.js';
import cropRoutes from './routes/crop.routes.js';
import productRoutes from './routes/product.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import weatherRoutes from './routes/weather.routes.js';
import { notFound, errorHandler } from './middleware/error.middleware.js';

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'AgriTech API' }));
app.use('/api/auth', authRoutes);
app.use('/api/farms', farmRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/products', productRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/weather', weatherRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;
connectDB().then(() => app.listen(port, () => console.log(`AgriTech API running on port ${port}`)))
  .catch((error) => { console.error('Database connection failed:', error.message); process.exit(1); });
