import { SettingsSchemaType } from "../../../models/settings";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

export class SpamController implements Controller {
	settings: SettingsSchemaType;
	loopResponse = true;

	constructor(settings: SettingsSchemaType) {
		this.settings = settings;
	}

	handleCommand({ command, messageContent }: HandleCommandOptions) {
		try {
			if (this.settings.spamming === false) return "";

			const [, commandType] = command.split(" ");
			const [, , ...commandValue] = messageContent!.split(" ");

			if (commandType !== "spam") return null;
			if (commandValue.length === 0) return "Spamming";

			return commandValue.join(" ");
		} catch (err) {
			return devError(err);
		}
	}
}
