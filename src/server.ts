import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { profileRouter } from './routes/api/profile.routes';
import { indexRouter } from './routes/index.routes';

const app = express();

app.use(cors());

// Express configuration
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', indexRouter);

app.use('/api/profiles', profileRouter);

const port = app.get('port');
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
