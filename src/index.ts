import chalk from "chalk";
import "dotenv/config";
import mongoose from "mongoose";
import { Bot } from "./bot";
import { DiceController } from "./controllers/DiceController";
import { RandomMessageController } from "./controllers/RandomMessageController";
import { RandomNumberController } from "./controllers/RandomNumberController";
import { RockPaperScissorsController } from "./controllers/RockPaperScissorsController";
import { SpamControlController } from "./controllers/SpamControlController";
import { SpamController } from "./controllers/SpamController";
import { SettingsModel } from "./models/settings";
import { initServer } from "./server";

async function initDatabase() {
	try {
		mongoose.connect(process.env.DATABASE_ACCESS!, { useNewUrlParser: true, useUnifiedTopology: true });
	} catch (err) {
		console.log(chalk.redBright.bold(err.message));
	}
}

export async function initBot() {
  mongoose.set("useCreateIndex", true);
	initDatabase();

	const settings = await SettingsModel.findOne();

	const bot = new Bot([
		new DiceController(),
		new RandomNumberController(),
		new RandomMessageController(),
		new SpamController(settings!),
		new RockPaperScissorsController(),
		new SpamControlController(settings!),
	]);
}

initBot();
initServer();
