import { Router } from 'express';
import sessionRoutes from './session.routes';
import metricsRoutes from './metrics.routes';
import energyRoutes from './energy.routes';
import analyticsRoutes from './analytics.routes';
import userRoutes from './user.routes';

const router = Router();

router.use('/session', sessionRoutes);
router.use('/metrics', metricsRoutes);
router.use('/energy', energyRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/user', userRoutes);

export default router;