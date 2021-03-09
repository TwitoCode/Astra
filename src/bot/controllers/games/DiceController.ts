import { devError } from "../../utils/devError";
import { random } from "../../utils/random";
import { Controller, HandleCommandOptions } from "../Controller";

export class DiceController extends Controller {
	constructor() {
		super();
	}

	handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "dice",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			const number = random(1, 6);
			return `${number} was rolled`;
		} catch (err) {
			return devError(err);
		}
	}
}
