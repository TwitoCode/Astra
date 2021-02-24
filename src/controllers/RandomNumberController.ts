import { random } from "../utils/random";
import { Controller } from "./Controller";

export class RandomNumberController implements Controller {
	handleCommand(command: string) {
		const [, commandType, commandValue] = command.split(" ");

		if (commandType !== "random") return "";
		if (commandValue !== "number") return "";

		return random(1, 100).toString();
	}
}
