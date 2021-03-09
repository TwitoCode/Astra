import { SettingsSchemaType } from "../../../models/settings";
import { devError } from "../../utils/devError";
import { hasRole } from "../../utils/hasRole";
import { ControllerWithSettings, HandleCommandOptions } from "../Controller";

export class SpamControlController extends ControllerWithSettings {
	settings: SettingsSchemaType;

	constructor(settings: SettingsSchemaType) {
		super(settings);
	}

	async handleCommand({ command, message: message }: HandleCommandOptions) {
		try {
			const { settings } = this;
			const [, commandType, commandValue] = command.split(" ");

			const memberHasRole = hasRole(message!.member, settings?.roles);

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

			return `Spamming is turned ${settings?.spamming ? "on" : "off"}`;
		} catch (err) {
			return devError(err);
		}
	}
}
