import { Router, Response } from 'express';
import Request from '../types/request.type';

const indexRouter: Router = Router();

// @route   GET api/
// @desc    Get current user's profile
// @access  Private
indexRouter.get('/', async (req: Request, res: Response) => {
  res.send('Demo API Status: OK');
});

export { indexRouter };
