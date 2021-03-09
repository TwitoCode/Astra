import { SettingsSchemaType } from "../../../models/settings";
import { devError } from "../../utils/devError";
import { ControllerWithSettings, HandleCommandOptions } from "../Controller";

export class SpamController extends ControllerWithSettings {
	loopResponse = true;

	constructor(settings: SettingsSchemaType) {
		super(settings);
	}

	handleCommand(options: HandleCommandOptions) {
		try {
			if (this.settings?.spamming === false) return null;

			const command = this.getCommand({
				expectedMessage: "spam",
				inputMessage: true,
				messageOptions: options,
			});

			if (command === null) return null;

			const [_, commandInput] = command;
			if (commandInput?.length === 0) return "Spamming";

			return commandInput!;
		} catch (err) {
			return devError(err);
		}
	}
}
