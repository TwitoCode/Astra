import { SettingsSchemaType } from "../../../models/settings";
import { devError } from "../../utils/devError";
import { hasRole } from "../../utils/hasRole";
import { Controller, HandleCommandOptions } from "../Controller";

export class SpamControlController implements Controller {
	settings: SettingsSchemaType;
	loopResponse: false;

	constructor(settings: SettingsSchemaType) {
		this.settings = settings;
	}

	async handleCommand({ command, message }: HandleCommandOptions) {
		try {
			const { settings } = this;
			const [, commandType, commandValue] = command.split(" ");

			const memberHasRole = hasRole(message!.member, settings.roles);

			if (commandValue !== "spam") return null;

			if (commandType === "turnoff" && memberHasRole) {
				if (settings.spamming === false) return "Spamming is already off";

				settings.spamming = false;
				settings.save();
			} else if (commandType === "turnon" && memberHasRole) {
				if (settings.spamming === true) return "Spamming is already on";

				settings.spamming = true;
				settings.save();
			} else {
				return "You scrub your not special enough to do that";
			}

			return `Spamming is turned ${settings.spamming ? "on" : "off"}`;
		} catch (err) {
			return devError(err);
		}
	}
}
