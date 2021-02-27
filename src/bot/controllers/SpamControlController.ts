import chalk from "chalk";
import { hasRole } from "../utils/hasRole";
import { SettingsSchemaType } from "../models/settings";
import { Controller, HandleCommandOptions } from "./Controller";

export class SpamControlController implements Controller {
	settings: SettingsSchemaType;

	constructor(settings: SettingsSchemaType) {
		this.settings = settings;
	}

	async handleCommand({ command, message }: HandleCommandOptions) {
		try {
			const [, commandType, commandValue] = command.split(" ");

			const memberHasRole = hasRole(
				message!.member,
				process.env.ADMIN_ROLE! || process.env.OWNER_ROLE! || process.env.SPECIAL_ROLE!
			);

			if (commandValue !== "spam") return "";

			if (commandType === "turnoff" && memberHasRole) {
				this.settings.spamming = false;
				this.settings.save();
			} else if (commandType === "turnon" && memberHasRole) {
				this.settings.spamming = true;
				this.settings.save();
			} else {
				return "You scrub your not special enough to do that";
			}

			return `Spamming is turned ${this.settings.spamming ? "on" : "off"}`;
		} catch (err) {
			throw new Error(chalk.redBright.bold(err.message));
		}
	}
}
