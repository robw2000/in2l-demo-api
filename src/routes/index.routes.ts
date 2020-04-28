import { Router, Response } from 'express';
import Request from '../types/request.type';

const indexRouter: Router = Router();

// @route   GET /
// @desc    API Status
indexRouter.get('/', async (req: Request, res: Response) => {
  res.send('Demo API Status: OK');
});

export { indexRouter };
