import chalk from "chalk";
import { Client } from "discord.js";
import { randomMessages } from "./messages";
import { loop } from "./utils/loop";
import { random } from "./utils/random";

const client = new Client();

client.login(process.env.BOT_TOKEN);
client.once("ready", () => console.log(chalk.blueBright.bold("Astra is Running!")));

client.on("message", (message) => {
	const [initializeCommand, command, value] = message.content.split(" ");

	if (message.content.length === 0) return;
	if (initializeCommand !== "astra") return;

	if (command === "random") {
		if (value === "message") {
			const index = random(1, randomMessages.length);
			return message.channel.send(randomMessages[index]);
		}

		if (value === "number") {
			return message.channel.send(random(1, 100));
		}
	}

	if (command === "dice") {
		return message.channel.send(`${random(1, 6)} was rolled`);
	}

	if (command === "spam") {
		if (value?.length > 0) {
			return loop(() => message.channel.send(value), 5);
		}

		return loop(() => message.channel.send("Spam"), 5);
	}
});
