import * as process from 'process';
export const configuration = () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.APP_PORT ?? '3000', 10),
  logLvl: process.env.LOG_LVL || 'debug',
  swaggerEnabled: process.env.SWAGGER_ENABLED === 'true',
  database: {
    uri: process.env.DATABASE_URI,
    name: process.env.DATABASE_NAME,
    debug: process.env.DATABASE_DEBUG === 'true',
    options: {
      serverSelectionTimeoutMS: 30 * 1000, // 30 secs
      socketTimeoutMS: 30 * 1000, // 30 secs
      heartbeatFrequencyMS: 30 * 1000, // 30 secs
    },
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  },
  openAiApiKey: process.env.OPENAI_API_KEY,
});
