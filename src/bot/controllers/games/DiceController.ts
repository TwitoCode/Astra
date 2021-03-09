import { devError } from "../../utils/devError";
import { random } from "../../utils/random";
import { Controller, HandleCommandOptions } from "../Controller";

export class DiceController extends Controller {
	constructor() {
		super();
	}
	
	handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType] = command.split(" ");
			if (commandType !== "dice") return null;

			const number = random(1, 6);
			return `${number} was rolled`;
		} catch (err) {
			return devError(err);
		}
	}
}
