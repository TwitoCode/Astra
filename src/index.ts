import "dotenv/config";
import { Bot } from "./bot";
import { DiceController } from "./controllers/DiceController";
import { RandomMessageController } from "./controllers/RandomMessageController";
import { RandomNumberController } from "./controllers/RandomNumberController";
import { RockPaperScissorsController } from "./controllers/RockPaperScissorsController";
import { SpamController } from "./controllers/SpamController";
import { initServer } from "./server";

export function initBot() {
	const bot = new Bot([
		new DiceController(),
		new RandomNumberController(),
		new RandomMessageController(),
		new SpamController(),
		new RockPaperScissorsController(),
  ]);
}

initBot();
initServer();
