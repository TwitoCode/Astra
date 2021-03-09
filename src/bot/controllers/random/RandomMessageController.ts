import { randomMessages } from "../../assets/messages";
import { devError } from "../../utils/devError";
import { random } from "../../utils/random";
import { Controller, HandleCommandOptions } from "../Controller";

export class RandomMessageController extends Controller {
	handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "random message",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			const index = random(1, randomMessages.length);
			return randomMessages[index];
		} catch (err) {
			return devError(err);
		}
	}
}
