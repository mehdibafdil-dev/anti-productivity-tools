import { Router } from 'express';
import { EnergyController } from '../controllers/energy.controller';
import { validateEnergyData } from '../middleware/validation';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const energyController = new EnergyController();

router.get('/current',
  authMiddleware,
  energyController.getCurrentEnergy
);

router.post('/pattern',
  authMiddleware,
  validateEnergyData,
  energyController.updateEnergyPattern
);

router.get('/recommendations',
  authMiddleware,
  energyController.getRecommendations
);

router.get('/optimal-times',
  authMiddleware,
  energyController.getOptimalWorkTimes
);

router.post('/log',
  authMiddleware,
  validateEnergyData,
  energyController.logEnergyLevel
);

export default router;