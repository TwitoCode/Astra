import chalk from "chalk";
import { Bot } from "../bot/bot";
import { Controller } from "../bot/controllers/Controller";
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
import { SettingsModel } from "../models/settings";
import { BoredController } from "./../bot/controllers/other/BoredController";
import { WeatherController } from "./../bot/controllers/other/WeatherController";
import { ChuckNorrisQuoteController } from "./../bot/controllers/quotes/ChuckNorrisQuoteController";
import { RandomCatController } from "./../bot/controllers/random/RandomCatController";

export async function initBot() {
	try {
		const settings = await SettingsModel.findOne();

		const controllersWithSettings: Controller[] = settings
			? [new SpamController(settings), new SpamControlController(settings)]
			: [];

		const controllers: Controller[] = [
			new RandomNumberController(),
			new RandomMessageController(),
			new RandomCatController(),
			new RandomDogController(),
			new DiceController(),
			new RockPaperScissorsController(),
			new BreakingBadQuoteController(),
			new ChuckNorrisQuoteController(),
			new AnimeQuotesController(),
			new YodaTranslateController(),
			new BoredController(),
			new BeLikeBillController(),
			new WeatherController(),
			new HelpController(),
		];

		new Bot([...controllers, ...controllersWithSettings]);
	} catch (err) {
		console.log(chalk.redBright.bold(devError(err)));
	}
}
