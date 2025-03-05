import { Scenes } from 'telegraf';

import { BotContext } from '../types';

export abstract class SceneBase {
  protected scene: Scenes.BaseScene<BotContext> | Scenes.WizardScene<Scenes.WizardContext>;

  constructor(protected sceneId: string) {
    this.scene = this.createScene();
  }

  public getScene(): Scenes.BaseScene<BotContext> | Scenes.WizardScene<Scenes.WizardContext> {
    return this.scene;
  }

  protected abstract createScene(): Scenes.BaseScene<BotContext> | Scenes.WizardScene<Scenes.WizardContext>;
}
