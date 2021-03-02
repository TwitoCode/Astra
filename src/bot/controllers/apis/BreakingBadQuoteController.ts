import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface Response {
	quote: string;
	author: string;
}

export class BreakingBadQuoteController implements Controller {
	loopResponse: false;

	async handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, ...commandType] = command.split(" ");

			if (commandType.slice(0, 2).join(" ") !== "breaking bad") return null;

			const [res] = (await (
				await fetch(`https://breaking-bad-quotes.herokuapp.com/v1/quotes`)
			).json()) as Response[];

			return `${res.quote} -${res.author}`;
		} catch (err) {
			return devError(err);
		}
	}
}
