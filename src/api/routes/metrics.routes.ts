import { Router } from 'express';
import { MetricsController } from '../controllers/metrics.controller';
import { validateMetrics } from '../middleware/validation';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const metricsController = new MetricsController();

router.post('/track',
  authMiddleware,
  validateMetrics,
  metricsController.trackMetrics
);

router.get('/daily',
  authMiddleware,
  metricsController.getDailyMetrics
);

router.get('/weekly',
  authMiddleware,
  metricsController.getWeeklyMetrics
);

router.get('/monthly',
  authMiddleware,
  metricsController.getMonthlyMetrics
);

router.get('/trends',
  authMiddleware,
  metricsController.getProductivityTrends
);

router.get('/report',
  authMiddleware,
  metricsController.generateReport
);

export default router;