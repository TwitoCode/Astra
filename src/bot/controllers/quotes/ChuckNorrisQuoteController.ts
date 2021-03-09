import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface ChuckNorrisQuoteResponse {
	value: string;
}

export class ChuckNorrisQuoteController extends Controller {
	async handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "chuck norris",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			const res = (await (
				await fetch(`https://api.chucknorris.io/jokes/random`)
			).json()) as ChuckNorrisQuoteResponse;

			return res.value;
		} catch (err) {
			return devError(err);
		}
	}
}
