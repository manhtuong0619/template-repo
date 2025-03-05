import { Scenes } from 'telegraf';

import { SceneBase } from '../shared/sences';
import { BotContext, PostData } from '../shared/types';

export class NewPostScene extends SceneBase {
  constructor() {
    super('new-post-wizard');
  }

  protected createScene(): Scenes.WizardScene<Scenes.WizardContext> {
    return new Scenes.WizardScene<Scenes.WizardContext>(
      this.sceneId,
      this.stepTitle.bind(this),
      this.stepDescription.bind(this),
      this.stepTags.bind(this),
      this.stepConfirmation.bind(this)
    );
  }

  private async stepTitle(ctx: BotContext) {
    ctx.session.postData = {};
    await ctx.reply('Please enter the title for your post:');
    return ctx.wizard.next();
  }

  private async stepDescription(ctx: BotContext) {
    if (!ctx.message || !('text' in ctx.message)) {
      await ctx.reply('Please send a text message as the title.');
      return;
    }

    ctx.session.postData.title = ctx.message.text;
    await ctx.reply('Now, please enter the description for your post:');
    return ctx.wizard.next();
  }

  private async stepTags(ctx: BotContext) {
    if (!ctx.message || !('text' in ctx.message)) {
      await ctx.reply('Please send a text message as the description.');
      return;
    }

    ctx.session.postData.description = ctx.message.text;
    await ctx.reply('Please enter tags for your post (separate them with commas):');
    return ctx.wizard.next();
  }

  private async stepConfirmation(ctx: BotContext) {
    if (!ctx.message || !('text' in ctx.message)) {
      await ctx.reply('Please reply with "yes" or "no".');
      return;
    }

    const response = ctx.message.text.toLowerCase();

    if (response === 'yes') {
      // Save the post
      console.log('Post data:', ctx.session.postData as PostData);

      await ctx.reply('✅ Your post has been created successfully!');
    } else {
      await ctx.reply('❌ Post creation cancelled. Use /new-post to start again.');
    }

    return ctx.scene.leave();
  }
}
