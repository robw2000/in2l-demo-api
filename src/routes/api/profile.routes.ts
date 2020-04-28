import { Router, Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import Request from '../../types/request.type';

import { Profile, PROFILE_DOC_TYPE } from '../../models/Profile';
import { CouchbaseService } from '../../services/couchbase.service';
import { ModelFactory } from '../../models/model-factory';

const profileRouter: Router = Router();
const service: CouchbaseService = new CouchbaseService();

// @route   GET api/profiles
// @desc    Get a profile document
profileRouter.get('', async (req: Request, res: Response) => {
  try {
    const items = await service.getAllByType(PROFILE_DOC_TYPE);
    const profiles: Profile[] = items.map(
      item => <Profile>ModelFactory.create(item)
    );

    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Server Error');
  }
});

// @route   GET api/profiles/:profileId
// @desc    Get a profile document
profileRouter.get('/:profileId', async (req: Request, res: Response) => {
  try {
    const item = await service.get(req.params.profileId);
    const profile: Profile = <Profile>ModelFactory.create(item);
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Server Error');
  }
});

export { profileRouter };
