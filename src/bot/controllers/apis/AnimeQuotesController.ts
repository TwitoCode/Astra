import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface Response {
	quote: string;
	anime: string;
	character: string;
}

export class AnimeQuotesController implements Controller {
	loopResponse: false;

	async handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, ...commandType] = command.split(" ");

			if (commandType.slice(0, 2).join(" ") !== "anime quote") return null;

			const res = (await (await fetch(`https://animechan.vercel.app/api/random`)).json()) as Response;

			return `${res.quote} -${res.character}, ${res.anime}`;
		} catch (err) {
			return devError(err);
		}
	}
}
