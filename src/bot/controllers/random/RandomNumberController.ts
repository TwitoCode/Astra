import { devError } from "../../utils/devError";
import { random } from "../../utils/random";
import { Controller, HandleCommandOptions } from "../Controller";

export class RandomNumberController extends Controller {
	handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType, commandValue] = command.split(" ");

			if (commandType !== "random") return null;
			if (commandValue !== "number") return null;

			return random(1, 100).toString();
		} catch (err) {
			return devError(err);
		}
	}
}
