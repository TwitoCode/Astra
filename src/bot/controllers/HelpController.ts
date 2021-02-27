import chalk from "chalk";
import { MessageEmbed } from "discord.js";
import { Controller, HandleCommandOptions } from "./Controller";

export class HelpController implements Controller {
	loopResponse: false;

	handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType] = command.split(" ");
			if (commandType !== "help") return null;

			return new MessageEmbed()
				.setColor("#159bfc")
				.setTitle("Astra Bot: Help")
				.setDescription("This is the help section for this bot, you can find commands here.")
				.setThumbnail(
					"https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXN0cm9uYXV0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
				)
				.setImage(
					"https://c4.wallpaperflare.com/wallpaper/613/108/884/artistic-psychedelic-wallpaper-preview.jpg"
				)
				.setTimestamp()
				.addField(
					"Commands",
					`**Dice:** astra dice
					**Rock Paper Scissors:** astra rps
					**Random Number:** astra random number
					**Random Message:** astra random message
					**Spam:** astra spam (Your message, default: Spamming)
					**Spam Control:** astra turnon/turnoff spam
					`
				)
				.addField("Source Code (If your interested)", "https://github.com/TwitoCode/Astra")
				.addField(
					"The End",
					"Let me know if you want anything added to the bot and I might be able to add it."
				);
		} catch (err) {
			throw new Error(chalk.redBright.bold(err.message));
		}
	}
}
