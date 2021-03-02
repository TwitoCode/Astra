import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

export class BeLikeBillController implements Controller {
	loopResponse: false;

	async handleCommand({ command, messageContent }: HandleCommandOptions) {
		try {
			const [, commandType] = command.split(" ");
			const [, , name] = messageContent!.split(" ");

			if (commandType !== "blb") return null;
			if (!name) return null;

			return `https://belikebill.ga/billgen-API.php?name=${name}&text=This%20is%20${name}%0D%0A%0D%0A${name}%20does%20not%20play%20fortnite%0D%0A${name}%20has%20a%20life%0D%0A%0D%0ABe%20Like%20${name}`;
		} catch (err) {
			return devError(err);
		}
	}
}
