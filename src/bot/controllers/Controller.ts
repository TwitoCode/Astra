import { Message, MessageEmbed } from "discord.js";
import { SettingsSchemaType } from "../../models/settings";

type HandleCommandReturn = string | MessageEmbed | null;

export abstract class Controller {
	loopResponse: boolean = false;

	abstract handleCommand(
		options: HandleCommandOptions
	): HandleCommandReturn | Promise<HandleCommandReturn> | Promise<HandleCommandReturn | never>;
}

export abstract class ControllerWithSettings extends Controller {
	settings: SettingsSchemaType;

	constructor(settings: SettingsSchemaType) {
		super();
		this.settings = settings;
	}

	abstract handleCommand(options: HandleCommandOptions): HandleCommandReturn | Promise<HandleCommandReturn>;
}

export interface HandleCommandOptions {
	command: string;
	messageContent?: string;
	message?: Message;
}
