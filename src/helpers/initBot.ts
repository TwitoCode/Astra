import chalk from "chalk";
import { Bot } from "../bot/bot";
import { Controller } from "../bot/controllers/Controller";
import { DiceController } from "../bot/controllers/DiceController";
import { RandomMessageController } from "../bot/controllers/RandomMessageController";
import { RandomNumberController } from "../bot/controllers/RandomNumberController";
import { RockPaperScissorsController } from "../bot/controllers/RockPaperScissorsController";
import { SpamControlController } from "../bot/controllers/SpamControlController";
import { SpamController } from "../bot/controllers/SpamController";
import { SettingsModel } from "../bot/models/settings";

export async function initBot() {
	try {
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
