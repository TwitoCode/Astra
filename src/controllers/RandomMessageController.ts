import { randomMessages } from "../messages";
import { random } from "../utils/random";
import { Controller } from "./Controller";

export class RandomMessageController implements Controller {
	handleCommand(command: string) {
		const [, commandType, commandValue] = command.split(" ");

		if (commandType !== "random") return "";
		if (commandValue !== "message") return "";

		const index = random(1, randomMessages.length);
		return randomMessages[index];
	}
}
