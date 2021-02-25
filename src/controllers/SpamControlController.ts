import { hasRole } from "../utils/hasRole";
import { SettingsSchemaType } from "./../models/settings";
import { Controller, HandleCommandOptions } from "./Controller";

export class SpamControlController implements Controller {
	settings: SettingsSchemaType;

	constructor(settings: SettingsSchemaType) {
		this.settings = settings;
	}

	async handleCommand({ command, message }: HandleCommandOptions): Promise<string> {
		const [, commandType, commandValue] = command.split(" ");

		if (
			!hasRole(
				message!.member,
				process.env.ADMIN_ROLE! || process.env.OWNER_ROLE! || process.env.SPECIAL_ROLE!
			)
		)
			return "";

		console.log(commandType, commandValue);
		if (commandValue !== "spam") return "";
		if (commandType === "turnoff") this.settings.spamming = false;
		if (commandType === "turnon") this.settings.spamming = true;

		this.settings.save();

		return `Spamming is turned ${this.settings.spamming ? "on" : "off"}`;
	}
}
