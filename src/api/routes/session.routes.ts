import { Router } from 'express';
import { SessionController } from '../controllers/session.controller';
import { validateSession } from '../middleware/validation';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const sessionController = new SessionController();

router.post('/start', 
  authMiddleware, 
  validateSession, 
  sessionController.startSession
);

router.post('/end', 
  authMiddleware, 
  sessionController.endSession
);

router.post('/pause', 
  authMiddleware, 
  sessionController.pauseSession
);

router.post('/resume', 
  authMiddleware, 
  sessionController.resumeSession
);

router.get('/current', 
  authMiddleware, 
  sessionController.getCurrentSession
);

router.get('/history', 
  authMiddleware, 
  sessionController.getSessionHistory
);

export default router;