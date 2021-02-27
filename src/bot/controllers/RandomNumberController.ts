import chalk from "chalk";
import { random } from "../utils/random";
import { Controller, HandleCommandOptions } from "./Controller";

export class RandomNumberController implements Controller {
	loopResponse: false;

	handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType, commandValue] = command.split(" ");

			if (commandType !== "random") return null;
			if (commandValue !== "number") return null;

			return random(1, 100).toString();
		} catch (err) {
			throw new Error(chalk.redBright.bold(err.message));
		}
	}
}
