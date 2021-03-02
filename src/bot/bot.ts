import chalk from "chalk";
import { Client as DiscordClient } from "discord.js";
import { Controller } from "./controllers/Controller";
import { devSend } from "./utils/devSend";
import { loop } from "./utils/loop";

export class Bot {
	client: DiscordClient;
	controllers: Controller[];

	constructor(controllers: Controller[]) {
		this.client = new DiscordClient();
		this.controllers = controllers;

		this.client.login(process.env.BOT_TOKEN);
		this.client.once("ready", () => console.log(chalk.cyan("Astra Bot is Running!")));

		this.commandHandler();
	}

	async commandHandler() {
		try {
			const { client, controllers } = this;

			client.on("message", async (message) => {
				const [prefix] = message.content.toLowerCase().split(" ");
				if (prefix !== "astra") return;

				for (const controller of controllers) {
					const output = await controller.handleCommand({
						command: message.content.toLowerCase(),
						messageContent: message.content,
						message,
					});

					if (output === null) continue;

					if (controller.loopResponse === true) {
						return loop(() => message.channel.send(devSend(output)), 5);
					}

					message.channel.send(devSend(output));
					return;
				}
			});
		} catch (err) {
			throw new Error(chalk.redBright.bold(err.message));
		}
	}
}
