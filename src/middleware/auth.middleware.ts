import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import HttpStatusCodes from 'http-status-codes';

 
class AuthMiddleware {
	async validateToken(req: express.Request, res: express.Response, next:express.NextFunction) {
		dotenv.config();
		const header = req.headers['authorization']

		// Allowing for either an 'Authorization: Bearer token', or a cookie token
		const authToken = (header && header.split(' ')[1]) || (req.cookies && req.cookies['in2l-demo-token']);
		
		// No auth token, so return
		if (!authToken) {
			return res.sendStatus(HttpStatusCodes.UNAUTHORIZED);
		}
		
		jwt.verify(authToken, process.env.SECRET as string, (err: any, user: any) => {
			if (err) {
				console.log(err);
				return res.sendStatus(403);
			}
			
			// Got a valid token, so let's goooooooooo
			next()
		})
	}
}

export default new AuthMiddleware();