import { Router } from 'express';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import { listProducts, createProduct, updateProduct, deleteProduct } from '../controllers/resource.controller.js';
const router = Router(); router.get('/', listProducts); router.post('/', protect, adminOnly, createProduct); router.put('/:id', protect, adminOnly, updateProduct); router.delete('/:id', protect, adminOnly, deleteProduct); export default router;
