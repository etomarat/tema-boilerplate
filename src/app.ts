import express, { Express, Request, Response } from 'express';
import session from 'express-session'
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import adminInit from './admin';

import { DB_NAME, SESSION_SECRET, PORT } from './env';

const app: Express = express();

const connectionStr = `mongodb://localhost:27017/${DB_NAME}`;
export const connectionPr = mongoose.connect(connectionStr);

app.use(session({
  store: MongoStore.create({ mongoUrl: connectionStr }),
  secret: SESSION_SECRET,
}));

app.use('/static', express.static('static'));

app.get('/', async (req: Request, res: Response) => {
  res.send('TypeScript + Express + Mongo + AdminJS backend boilerplate');
});

adminInit().catch(err => console.error(err));

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;