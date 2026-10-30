import { Router } from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { listFarms, createFarm, updateFarm, deleteFarm } from '../controllers/resource.controller.js';
const router = Router(); router.use(protect); router.route('/').get(listFarms).post(createFarm); router.route('/:id').put(updateFarm).delete(deleteFarm); export default router;
