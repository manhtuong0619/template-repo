import { session, Telegraf } from 'telegraf';

import { CommandManager } from './commands/mannager';
import { SceneManager } from './sences/manager';
import { BotContext } from './shared/types';

export class TelegramBotApp {
  private bot: Telegraf<BotContext>;
  private sceneManager: SceneManager;
  private commandManager: CommandManager;

  constructor(token: string) {
    this.bot = new Telegraf<BotContext>(token);

    this.sceneManager = new SceneManager();
    this.commandManager = new CommandManager();

    this.setupMiddleware();
    this.setupScenes();
    this.setupCommands();
    this.setupErrorHandling();
  }

  private setupMiddleware(): void {
    // Add session middleware with proper typing
    this.bot.use(
      session({
        defaultSession: () => ({ postData: {} }),
      })
    );
  }

  private setupScenes(): void {
    // Add stage middleware with all scenes
    const stage = this.sceneManager.getStage();
    this.bot.use(stage.middleware());
  }

  private setupCommands(): void {
    // Register all command handlers
    this.commandManager.registerAll(this.bot);
  }

  private setupErrorHandling() {
    // Basic error handling
    this.bot.catch((err, ctx) => {
      console.error(`Error for ${ctx.updateType}:`, err);
      void ctx.reply('An error occurred while processing your request.');
    });
  }

  public async start(): Promise<void> {
    try {
      await this.bot.launch();
      console.log('Bot started successfully');

      // Enable graceful stop
      process.once('SIGINT', () => this.stop('SIGINT'));
      process.once('SIGTERM', () => this.stop('SIGTERM'));
    } catch (error) {
      console.error('Failed to start bot:', error);
      throw error;
    }
  }

  private stop(signal: string): void {
    console.log(`Received ${signal} signal, shutting down...`);
    this.bot.stop(signal);
  }
}
