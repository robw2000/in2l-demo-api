import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { profileRouter } from './routes/api/profile.routes';
import { authRouter } from './routes/api/auth.routes';
import { indexRouter } from './routes/index.routes';
import authMiddleWare  from './middleware/auth.middleware';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());

// Express configuration
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  const allowedOrigins = ['http://127.0.0.1:4200', 'http://localhost:4200'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  return next();
});
app.get('/', indexRouter);

app.use('/api/profiles', authMiddleWare.validateToken, profileRouter);
app.use('/api/auth', authRouter);

const port = app.get('port');
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
