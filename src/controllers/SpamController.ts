import { SettingsSchemaType } from "../models/settings";
import { Controller, HandleCommandOptions } from "./Controller";

export class SpamController implements Controller {
	settings: SettingsSchemaType;

	constructor(settings: SettingsSchemaType) {
		this.settings = settings;
	}

	handleCommand({ command, messageContent }: HandleCommandOptions) {
		if (this.settings.spamming === false) return "";

		const [, commandType] = command.split(" ");
		const [, , ...commandValue] = messageContent!.split(" ");

		if (commandType !== "spam") return "";
		if (commandValue.length === 0) return "Spamming";

		return commandValue.join(" ");
	}
}
