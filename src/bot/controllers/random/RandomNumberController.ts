import { devError } from "../../utils/devError";
import { random } from "../../utils/random";
import { Controller, HandleCommandOptions } from "../Controller";

export class RandomNumberController extends Controller {
	handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "random number",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			return random(1, 100).toString();
		} catch (err) {
			return devError(err);
		}
	}
}
