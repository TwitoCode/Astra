import chalk from "chalk";
import { Bot } from "../bot/bot";
import { YodaTranslateController } from "../bot/controllers/apis/YodaTranslateController";
import { Controller } from "../bot/controllers/Controller";
import { DiceController } from "../bot/controllers/games/DiceController";
import { RockPaperScissorsController } from "../bot/controllers/games/RockPaperScissorsController";
import { HelpController } from "../bot/controllers/info/HelpController";
import { SpamControlController } from "../bot/controllers/other/SpamControlController";
import { SpamController } from "../bot/controllers/other/SpamController";
import { RandomMessageController } from "../bot/controllers/random/RandomMessageController";
import { RandomNumberController } from "../bot/controllers/random/RandomNumberController";
import { SettingsModel } from "../models/settings";
import { AnimeQuotesController } from "./../bot/controllers/apis/AnimeQuotesController";
import { BeLikeBillController } from "./../bot/controllers/apis/BeLikeBillController";
import { BoredController } from "./../bot/controllers/apis/BoredController";
import { BreakingBadQuoteController } from "./../bot/controllers/apis/BreakingBadQuoteController";
import { ChuckNorrisQuoteController } from "./../bot/controllers/apis/ChuckNorrisQuoteController";
import { RandomCatController } from "./../bot/controllers/apis/RandomCatController";
import { RandomDogController } from "./../bot/controllers/apis/RandomDogController";
import { WeatherController } from "./../bot/controllers/apis/WeatherController";

export async function initBot() {
	try {
		const settings = await SettingsModel.findOne();

		const controllersWithSettings: Controller[] = settings
			? [new SpamController(settings), new SpamControlController(settings)]
			: [];

		const controllers: Controller[] = [
			new DiceController(),
			new RandomNumberController(),
			new RandomMessageController(),
			new RockPaperScissorsController(),
			new HelpController(),
			new YodaTranslateController(),
			new BoredController(),
			new BreakingBadQuoteController(),
			new ChuckNorrisQuoteController(),
			new WeatherController(),
			new RandomCatController(),
			new RandomDogController(),
			new AnimeQuotesController(),
			new BeLikeBillController(),
		];

		new Bot([...controllers, ...controllersWithSettings]);
	} catch (err) {
		console.log(chalk.redBright.bold(err.message));
	}
}
