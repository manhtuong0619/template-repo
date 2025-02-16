import * as cors from 'cors';
import * as morgan from 'morgan';
import * as express from 'express';

import { config } from './config/configuration';
import logger from './utils/logger';
import connectDB from './database';
import initRoutes from './routes';

const app = express();

app.use(cors({ origin: '*' }));
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

connectDB()
  .then(() => {
    logger.info('MongoDB connected successfully');
  })
  .catch((err) => {
    logger.error('MongoDB connection error:', err);
    process.exit(1);
  });

initRoutes(app);

app.listen(config.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${config.PORT}`);
  console.log(`API documentation is available at http://localhost:${config.PORT}/api-docs`);
});
