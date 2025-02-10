import { Request, Response } from 'express';
import { WorkContext } from '../../core/WorkContext';
import { logger } from '../../utils/logger';
import { SessionConfig } from '../../types';

export class SessionController {
  private workContext: WorkContext;

  constructor() {
    this.workContext = WorkContext.getInstance();
  }

  public startSession = async (req: Request, res: Response): Promise<void> => {
    try {
      const sessionConfig: SessionConfig = req.body;
      const session = await this.workContext.startFocusSession(sessionConfig);

      res.status(201).json({
        success: true,
        data: session,
        message: 'Session started successfully'
      });
    } catch (error) {
      logger.error('Error starting session:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to start session'
      });
    }
  };

  public getCurrentSession = async (req: Request, res: Response): Promise<void> => {
    try {
      const currentSession = await this.workContext.getCurrentSession();

      if (!currentSession) {
        res.status(404).json({
          success: false,
          message: 'No active session found'
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: currentSession
      });
    } catch (error) {
      logger.error('Error fetching current session:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch current session'
      });
    }
  };

}