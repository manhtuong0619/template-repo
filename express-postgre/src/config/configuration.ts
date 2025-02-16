import * as dotenv from 'dotenv';
dotenv.config();

class Config {
  PORT = +process.env.PORT! || 8000;
  JWT_SECRET_KEY = process.env.JWT_SECRET_KEY!;
  JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME!;
  NODE_ENV = process.env.NODE_ENV!;
  DB_TYPE = process.env.DB_TYPE!;
  DB_HOST = process.env.DB_HOST!;
  DB_PORT = +process.env.DB_PORT!;
  DB_USERNAME = process.env.DB_USERNAME!;
  DB_PASSWORD = process.env.DB_PASSWORD!;
  DB_DATABASE = process.env.DB_DATABASE!;
  DB_MAX_CONNECTIONS = process.env.DB_MAX_CONNECTIONS!;
  DB_SSL_ENABLED = process.env.DB_SSL_ENABLED!;
  DB_REJECT_UNAUTHORIZED = process.env.DB_REJECT_UNAUTHORIZED!;
  REDIS_HOST = process.env.REDIS_HOST!;
  REDIS_PORT = +process.env.REDIS_PORT!;
  REDIS_PASSWORD = process.env.REDIS_PASSWORD!;
}

export const config = new Config();
