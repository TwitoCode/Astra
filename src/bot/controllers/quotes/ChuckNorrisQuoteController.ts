import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface ChuckNorrisQuoteResponse {
	value: string;
}

export class ChuckNorrisQuoteController extends Controller {
	async handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, ...commandType] = command.split(" ");

			if (commandType.slice(0, 2).join(" ") !== "chuck norris") return null;

			const res = (await (
				await fetch(`https://api.chucknorris.io/jokes/random`)
			).json()) as ChuckNorrisQuoteResponse;

			return res.value;
		} catch (err) {
			return devError(err);
		}
	}
}
