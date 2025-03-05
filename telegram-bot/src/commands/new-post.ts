import { Telegraf } from 'telegraf';

import { BotContext } from '../shared/types';

import { Command } from './mannager';

export class NewPostCommand implements Command {
  public register(bot: Telegraf<BotContext>): void {
    bot.command('new-post', (ctx) => ctx.scene.enter('new-post-wizard'));
  }
}
