import { Controller } from "./Controller";

export class SpamController implements Controller {
	handleCommand(command: string, messageContent?: string) {
		const [, commandType] = command.split(" ");
		const [, , ...commandValue] = messageContent!.split(" ");

		if (commandType !== "spam") return "";
		if (commandValue.length === 0) return "Spamming";

		return commandValue.join(" ");
	}
}
