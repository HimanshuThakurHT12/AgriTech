import { Router } from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { listCrops, createCrop, updateCrop, deleteCrop } from '../controllers/resource.controller.js';
const router = Router(); router.use(protect); router.route('/').get(listCrops).post(createCrop); router.route('/:id').put(updateCrop).delete(deleteCrop); export default router;
