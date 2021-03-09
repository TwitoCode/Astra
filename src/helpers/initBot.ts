import chalk from "chalk";
import { Bot } from "../bot/bot";
import { DiceController } from "../bot/controllers/games/DiceController";
import { RockPaperScissorsController } from "../bot/controllers/games/RockPaperScissorsController";
import { HelpController } from "../bot/controllers/info/HelpController";
import { BeLikeBillController } from "../bot/controllers/other/BeLikeBillController";
import { SpamControlController } from "../bot/controllers/other/SpamControlController";
import { SpamController } from "../bot/controllers/other/SpamController";
import { YodaTranslateController } from "../bot/controllers/other/YodaTranslateController";
import { AnimeQuotesController } from "../bot/controllers/quotes/AnimeQuotesController";
import { BreakingBadQuoteController } from "../bot/controllers/quotes/BreakingBadQuoteController";
import { RandomDogController } from "../bot/controllers/random/RandomDogController";
import { RandomMessageController } from "../bot/controllers/random/RandomMessageController";
import { RandomNumberController } from "../bot/controllers/random/RandomNumberController";
import { devError } from "../bot/utils/devError";
import { SettingsModel, SettingsSchemaType } from "../models/settings";
import { BoredController } from "./../bot/controllers/other/BoredController";
import { WeatherController } from "./../bot/controllers/other/WeatherController";
import { ChuckNorrisQuoteController } from "./../bot/controllers/quotes/ChuckNorrisQuoteController";
import { RandomCatController } from "./../bot/controllers/random/RandomCatController";

export async function initBot() {
	try {
		let settings: SettingsSchemaType | null = await SettingsModel.findOne();

		while (settings == null) {
			if ((await SettingsModel.find).length === 0) {
				const s = new SettingsModel({ roles: [], spamming: false });
				settings = await s.save();
				break;
			}

			console.log("Running");
			settings = await SettingsModel.findOne();
		}

		const controllersWithSettings = settings ? [SpamController, SpamControlController] : [];

		const controllers = [
			RandomNumberController,
			RandomMessageController,
			RandomCatController,
			RandomDogController,
			DiceController,
			RockPaperScissorsController,
			BreakingBadQuoteController,
			ChuckNorrisQuoteController,
			AnimeQuotesController,
			YodaTranslateController,
			BoredController,
			BeLikeBillController,
			WeatherController,
			HelpController,
		];

		new Bot(settings, [...controllers, ...controllersWithSettings]);
	} catch (err) {
		console.log(chalk.redBright.bold(devError(err)));
	}
}
