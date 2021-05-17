import { Router, Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import Request from '../../types/request.type';
import jwt from 'jsonwebtoken';

import { CouchbaseService } from '../../services/couchbase.service';
import payload from 'payload.type';

const authRouter: Router = Router();
const service: CouchbaseService = new CouchbaseService();

// @route   GET api/profiles
// @desc    Get a profile document
authRouter.post('/login', async (req: Request, res: Response) => {
  const inputs = <payload>req.body;
  try {
    let response = "Invalid username or password";
    let resCode = HttpStatusCodes.FORBIDDEN;
    const user = await service.getByUserId(inputs.userId);

    // Read in our env vars
    dotenv.config();
    
    // Ensure that the supplied password hashes to the same password that's saved
    if (user.password === bcryptjs.hashSync(inputs.password, process.env.SALT)) {
      // Got a match. Send back a JWT
      response = jwt.sign({
        userId: user.userId,
        roles: user.roles
      }, process.env.SECRET)
      resCode = HttpStatusCodes.OK;

      // Send down 15 min response cookie w/ the token
      const cookieOptions = {
				maxAge: 1000 * 60 * 15, // would expire after 15 minutes
				httpOnly: true, // The cookie only accessible by the web server
			}

      res.cookie('in2l-demo-token', response, cookieOptions);
    }

    res.status(resCode).send(response);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(403);
  }
});

export { authRouter };
