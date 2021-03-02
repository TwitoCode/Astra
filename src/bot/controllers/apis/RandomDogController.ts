import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface Response {
	url: string;
}

export class RandomDogController implements Controller {
	loopResponse: false;

	async handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType, commandValue] = command.split(" ");

			if (commandType !== "random") return null;
			if (commandValue !== "dog") return null;

			const res = (await (await fetch(`https://random.dog/woof.json?ref=apilist.fun`)).json()) as Response;

			return res.url;
		} catch (err) {
			return devError(err);
		}
	}
}
