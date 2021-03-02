import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface BoredResponse {
	activity: string;
}

export class BoredController implements Controller {
	loopResponse: false;

	async handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType] = command.split(" ");

			if (commandType !== "bored") return null;
			const res = (await (await fetch(`https://www.boredapi.com/api/activity`)).json()) as BoredResponse;

			return res.activity;
		} catch (err) {
			return devError(err);
		}
	}
}
