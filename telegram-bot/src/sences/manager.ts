import { Scenes } from 'telegraf';

import { SceneBase } from '../shared/sences';

import { NewPostScene } from './new-post';

export class SceneManager {
  private stage: Scenes.Stage<Scenes.WizardContext>;
  private scenes: SceneBase[];

  constructor() {
    this.scenes = [
      new NewPostScene(),
      // Add more scenes here
    ];

    this.stage = new Scenes.Stage<Scenes.WizardContext>(this.scenes.map((scene) => scene.getScene()));
  }

  public getStage(): Scenes.Stage<Scenes.WizardContext> {
    return this.stage;
  }
}
