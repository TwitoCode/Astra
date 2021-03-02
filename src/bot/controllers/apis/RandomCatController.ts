import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface Response {
	file: string;
}

export class RandomCatController implements Controller {
	loopResponse: false;

	async handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType, commandValue] = command.split(" ");

			if (commandType !== "random") return null;
			if (commandValue !== "cat") return null;

			const res = (await (await fetch(`https://aws.random.cat/meow`)).json()) as Response;

			return res.file;
		} catch (err) {
			return devError(err);
		}
	}
}
