import { Telegraf } from 'telegraf';

import { BotContext } from '../shared/types';

import { NewPostCommand } from './new-post';

export interface Command {
  register(bot: Telegraf<BotContext>): void;
}

export class CommandManager {
  private commands: Command[];

  constructor() {
    this.commands = [
      new NewPostCommand(),
      // Add more commands here
    ];
  }

  public registerAll(bot: Telegraf<BotContext>): void {
    this.commands.forEach((command) => command.register(bot));
  }
}
