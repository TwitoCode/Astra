import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface RandomCatResponse {
	file: string;
}

export class RandomCatController extends Controller {
	async handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "random cat",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			const res = (await (await fetch(`https://aws.random.cat/meow`)).json()) as RandomCatResponse;

			return res.file;
		} catch (err) {
			return devError(err);
		}
	}
}
