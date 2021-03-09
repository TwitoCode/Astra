import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface AnimeQuotesResponse {
	quote: string;
	anime: string;
	character: string;
}

export class AnimeQuotesController extends Controller {
	async handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "anime quote",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			const res = (await (
				await fetch(`https://animechan.vercel.app/api/random`)
			).json()) as AnimeQuotesResponse;

			return `${res.quote} -${res.character}, ${res.anime}`;
		} catch (err) {
			return devError(err);
		}
	}
}
