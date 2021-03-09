import { randomMessages } from "../../assets/messages";
import { devError } from "../../utils/devError";
import { random } from "../../utils/random";
import { Controller, HandleCommandOptions } from "../Controller";

export class RandomMessageController extends Controller {
	handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType, commandValue] = command.split(" ");

			if (commandType !== "random") return null;
			if (commandValue !== "message") return null;

			const index = random(1, randomMessages.length);
			return randomMessages[index];
		} catch (err) {
			return devError(err);
		}
	}
}
