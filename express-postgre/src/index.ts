import * as cors from 'cors';
import * as morgan from 'morgan';
import * as express from 'express';

import { config } from './config/configuration';
import AppDataSource from './database/data-source';
import logger from './utils/logger';
import initRoutes from './routes';

const app = express();

app.use(cors({ origin: '*' }));
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize()
  .then(() => {
    console.log(`🌟 Postgres connected`);
  })
  .catch((error) => {
    logger.error('❌ Connect to database error: ' + error.message);
    process.exit(0);
  });

initRoutes(app);

app.listen(config.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${config.PORT}`);
});
