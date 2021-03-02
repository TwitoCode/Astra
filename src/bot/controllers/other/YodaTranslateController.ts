import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface TranslateResponse {
	contents: {
		translated: string;
		text: string;
		translation: string;
	};
}

export class YodaTranslateController implements Controller {
	loopResponse: false;

	async handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType, ...commandValue] = command.split(" ");

			if (commandType !== "yoda") return null;
			if (!commandValue[0]) return null;

			const res = (await (
				await fetch(`https://api.funtranslations.com/translate/yoda.json?text=${commandValue.join("%20")}`)
			).json()) as TranslateResponse;

			return res.contents.translated;
		} catch (err) {
			return devError(err);
		}
	}
}
