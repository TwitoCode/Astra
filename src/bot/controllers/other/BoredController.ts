import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface BoredResponse {
	activity: string;
}

export class BoredController extends Controller {
	constructor() {
		super();
	}

	async handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "bored",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			const res = (await (await fetch(`https://www.boredapi.com/api/activity`)).json()) as BoredResponse;

			return res.activity;
		} catch (err) {
			return devError(err);
		}
	}
}
