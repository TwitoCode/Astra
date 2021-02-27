import { Message } from "discord.js";

export interface Controller {
	handleCommand(options: HandleCommandOptions): string | Promise<string> | Promise<string | never>;
}

export interface HandleCommandOptions {
	command: string;
	messageContent?: string;
	message?: Message;
}
