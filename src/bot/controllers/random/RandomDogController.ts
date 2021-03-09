import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface RandomDogResponse {
	url: string;
}

export class RandomDogController extends Controller {
	async handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "random dog",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			const res = (await (
				await fetch(`https://random.dog/woof.json?ref=apilist.fun`)
			).json()) as RandomDogResponse;

			return res.url;
		} catch (err) {
			return devError(err);
		}
	}
}
