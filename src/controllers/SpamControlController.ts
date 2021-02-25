import chalk from "chalk";
import { hasRole } from "../utils/hasRole";
import { SettingsSchemaType } from "./../models/settings";
import { Controller, HandleCommandOptions } from "./Controller";

export class SpamControlController implements Controller {
	settings: SettingsSchemaType;

	constructor(settings: SettingsSchemaType) {
		this.settings = settings;
	}

	async handleCommand({ command, message }: HandleCommandOptions) {
		try {
			const [, commandType, commandValue] = command.split(" ");

			if (
				!hasRole(
					message!.member,
					process.env.ADMIN_ROLE! || process.env.OWNER_ROLE! || process.env.SPECIAL_ROLE!
				)
			)
				return "You scrub your not special enough to do that";

			if (commandValue !== "spam") return "";
			if (commandType === "turnoff") this.settings.spamming = false;
			if (commandType === "turnon") this.settings.spamming = true;

			this.settings.save();

			return `Spamming is turned ${this.settings.spamming ? "on" : "off"}`;
		} catch (err) {
			throw new Error(chalk.redBright.bold(err.message));
		}
	}
}
