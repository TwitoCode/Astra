import chalk from "chalk";
import { SettingsSchemaType } from "../models/settings";
import { hasRole } from "../utils/hasRole";
import { Controller, HandleCommandOptions } from "./Controller";

export class SpamControlController implements Controller {
	settings: SettingsSchemaType;

	constructor(settings: SettingsSchemaType) {
		this.settings = settings;
	}

	async handleCommand({ command, message }: HandleCommandOptions) {
		try {
			const { settings } = this;
			const [, commandType, commandValue] = command.split(" ");

			const memberHasRole = hasRole(message!.member, settings.roles);

			if (commandValue !== "spam") return "";

			if (commandType === "turnoff" && memberHasRole) {
				if (settings.spamming === false) return "Spamming is already Off";

				settings.spamming = false;
				settings.save();
			} else if (commandType === "turnon" && memberHasRole) {
				settings.spamming = true;
				settings.save();
			} else {
				return "dev You scrub your not special enough to do that";
			}

			return `dev Spamming is turned ${settings.spamming ? "on" : "off"}`;
		} catch (err) {
			throw new Error(chalk.redBright.bold(err.message));
		}
	}
}
