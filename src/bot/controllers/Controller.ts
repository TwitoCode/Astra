import { Message, MessageEmbed } from "discord.js";

type HandleCommandReturn = string | MessageEmbed | null;

export interface Controller {
	loopResponse: boolean;
	handleCommand(
		options: HandleCommandOptions
	): HandleCommandReturn | Promise<HandleCommandReturn> | Promise<HandleCommandReturn | never>;
}

export interface HandleCommandOptions {
	command: string;
	messageContent?: string;
	message?: Message;
}
