import { Scenes } from 'telegraf';

export interface PostData {
  title: string;
  description: string;
}

// Define the session structure that extends the required WizardSession
export interface BotSessionData extends Scenes.WizardSession {
  postData: Partial<PostData>;
}

// Create a proper context type that works with wizard scenes
export interface BotContext extends Scenes.WizardContext {
  session: BotSessionData;
}
