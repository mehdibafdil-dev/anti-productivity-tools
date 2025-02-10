import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { validateUser } from '../middleware/validation';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const userController = new UserController();

router.post('/register',
  validateUser,
  userController.register
);

router.post('/login',
  userController.login
);

router.get('/profile',
  authMiddleware,
  userController.getProfile
);

router.put('/settings',
  authMiddleware,
  userController.updateSettings
);

router.get('/preferences',
  authMiddleware,
  userController.getPreferences
);

router.put('/preferences',
  authMiddleware,
  userController.updatePreferences
);

export default router;