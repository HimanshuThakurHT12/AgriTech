import { Router } from 'express';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import { listBookings, createBooking, updateBookingStatus } from '../controllers/resource.controller.js';
const router = Router(); router.use(protect); router.get('/', listBookings); router.post('/', createBooking); router.patch('/:id/status', adminOnly, updateBookingStatus); export default router;
