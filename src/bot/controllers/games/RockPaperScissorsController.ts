import { devError } from "../../utils/devError";
import { random } from "../../utils/random";
import { Controller, HandleCommandOptions } from "../Controller";

export class RockPaperScissorsController extends Controller {
	options: string[] = ["Rock", "Paper", "Scissors"];

	constructor() {
		super();
	}

	handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "rps",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			const index = random(0, this.options.length - 1);
			return `${this.options[index]}`;
		} catch (err) {
			return devError(err);
		}
	}
}
