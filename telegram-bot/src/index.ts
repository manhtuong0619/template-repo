import * as dotenv from 'dotenv';

import { TelegramBotApp } from './app';

// Load environment variables
dotenv.config();

// Get the bot token from environment variables
const token = process.env.BOT_TOKEN;

// Create and start the bot
const app = new TelegramBotApp(token);
app
  .start()
  .then(() => {
    console.log('Bot started successfully');
  })
  .catch(() => {
    console.error('Failed to start the bot');
  });
