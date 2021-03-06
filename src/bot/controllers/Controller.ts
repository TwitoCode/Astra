import { Message, MessageEmbed } from "discord.js";
import { SettingsSchemaType } from "../../models/settings";

type HandleCommandReturn = string | MessageEmbed | null;
type GetCommandReturn = null | [string, string] | [string];

export interface HandleCommandOptions {
	command: string;
	messageContent?: string;
	message?: Message;
}

interface GetCommandOptions {
	inputMessage: boolean;
	expectedMessage: string;
	messageOptions: HandleCommandOptions;
}

export abstract class Controller {
	loopResponse: boolean = false;

	abstract handleCommand(
		options: HandleCommandOptions
	): HandleCommandReturn | Promise<HandleCommandReturn> | Promise<HandleCommandReturn | never>;

	getCommand(options: GetCommandOptions): GetCommandReturn {
		const { inputMessage, expectedMessage, messageOptions } = options;

		switch (inputMessage) {
			case true: {
				const [_, commandType, ...commandInput] = messageOptions.messageContent!.split(" ");
				if (commandType !== expectedMessage) return null;

				return [commandType, commandInput.join(" ")];
			}

			case false: {
				let commandType: string;
				const [_, type] = messageOptions.messageContent!.split(" ");

				if (this.commandHasSpace(options.expectedMessage)) {
					const [_, ...type] = messageOptions.messageContent!.split(" ");
					commandType = type.join(" ");
				} else commandType = type;

				if (commandType !== expectedMessage) return null;

				return [commandType];
			}
		}
	}

	private commandHasSpace(str: string): boolean {
		const hasSpace = str.includes(" ");
		return hasSpace;
	}
}

export abstract class ControllerWithSettings extends Controller {
	settings: SettingsSchemaType;

	constructor(settings: SettingsSchemaType) {
		super();
		this.settings = settings;
	}

	abstract handleCommand(options: HandleCommandOptions): HandleCommandReturn | Promise<HandleCommandReturn>;
}
