import chalk from "chalk";
import { random } from "../utils/random";
import { Controller, HandleCommandOptions } from "./Controller";

export class DiceController implements Controller {
	handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType] = command.split(" ");
			if (commandType !== "dice") return "";
	
			const number = random(1, 6);
			return `${number} was rolled`;
		} catch (err) {
			throw new Error(chalk.redBright.bold(err.message));
		}
	}
}