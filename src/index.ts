import chalk from "chalk";
import "dotenv/config";
import mongoose from "mongoose";
import { Bot } from "./bot";
import { Controller } from "./controllers/Controller";
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
	try {
		mongoose.set("useCreateIndex", true);
		initDatabase();

		const settings = await SettingsModel.findOne();

		const controllersWithSettings: Controller[] = settings
			? [new SpamController(settings), new SpamControlController(settings)]
			: [];

		const bot = new Bot([
			new DiceController(),
			new RandomNumberController(),
			new RandomMessageController(),
			new RockPaperScissorsController(),
			...controllersWithSettings,
		]);
	} catch (err) {
		console.log(chalk.redBright.bold(err.message));
	}
}

initBot();
initServer();
