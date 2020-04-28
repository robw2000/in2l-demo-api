import bodyParser from 'body-parser';
import express from 'express';

import { profileRouter } from './routes/api/profile.routes';
import { indexRouter } from './routes/index.routes';

const app = express();

// Express configuration
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// @route   GET /
// @desc    Test Base API
// @access  Public
app.get('/', indexRouter);

app.use('/api/profiles', profileRouter);

const port = app.get('port');
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
