import { Router } from 'express';
import { AnalyticsController } from '../controllers/analytics.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const analyticsController = new AnalyticsController();

router.get('/dashboard',
  authMiddleware,
  analyticsController.getDashboardData
);

router.get('/performance',
  authMiddleware,
  analyticsController.getPerformanceMetrics
);

router.get('/insights',
  authMiddleware,
  analyticsController.getProductivityInsights
);

router.get('/comparison',
  authMiddleware,
  analyticsController.getHistoricalComparison
);

router.get('/export',
  authMiddleware,
  analyticsController.exportAnalytics
);

export default router;