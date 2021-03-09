import { SettingsSchemaType } from "../../../models/settings";
import { devError } from "../../utils/devError";
import { ControllerWithSettings, HandleCommandOptions } from "../Controller";

export class SpamController extends ControllerWithSettings {
	loopResponse = true;

	constructor(settings: SettingsSchemaType) {
		super(settings);
	}

	handleCommand({ command, messageContent }: HandleCommandOptions) {
		try {
			if (this.settings?.spamming === false) return null;

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
