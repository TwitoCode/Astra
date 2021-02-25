import { Message } from "discord.js";

export interface Controller {
	handleCommand(options: HandleCommandOptions): string | Promise<string>;
}

export interface HandleCommandOptions {
	command: string;
	messageContent?: string;
	message?: Message;
}
