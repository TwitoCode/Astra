import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

export class BeLikeBillController extends Controller {
	constructor() {
		super();
	}

	async handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "blb",
				inputMessage: true,
				messageOptions: options,
			});

			if (!command) return null;
			const [_, name] = command;

			return `https://belikebill.ga/billgen-API.php?name=${name}&text=This%20is%20${name}%0D%0A%0D%0A${name}%20does%20not%20play%20fortnite%0D%0A${name}%20has%20a%20life%0D%0A%0D%0ABe%20Like%20${name}`;
		} catch (err) {
			return devError(err);
		}
	}
}
