import chalk from "chalk";
import { random } from "../utils/random";
import { Controller, HandleCommandOptions } from "./Controller";

export class RockPaperScissorsController implements Controller {
	options: string[] = ["Rock", "Paper", "Scissors"];
	loopResponse: false;

	handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType] = command.split(" ");
			if (commandType !== "rps") return null;

			const index = random(0, this.options.length - 1);
			return `${this.options[index]}`;
		} catch (err) {
			throw new Error(chalk.redBright.bold(err.message));
		}
	}
}
