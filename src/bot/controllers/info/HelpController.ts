import { MessageEmbed } from "discord.js";
import { commands } from "../../commands";
import { Command } from "../../types";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";
export class HelpController extends Controller {
	constructor() {
		super();
	}

	parseCommands(message: MessageEmbed) {
		Object.keys(commands).forEach((commandType) => {
			commands[commandType].map((command: Command) => {
				message.addField(`**${command.name}**\u200b`, `${command.commandExample}\u200b`);
			});
		});
	}

	handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "help",
				inputMessage: false,
				messageOptions: options,
			});

			if (!command) return null;

			const message = new MessageEmbed()
				.setColor("#159bfc")
				.setTitle("Astra Bot: Help")
				.setDescription("This is the help section for this bot, you can find commands here.")
				.setThumbnail(
					"https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXN0cm9uYXV0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
				);

			this.parseCommands(message);

			message
				.addField("**Source Code (If your interested)**", "https://github.com/TwitoCode/Astra")
				.addField(
					"**The End**",
					"Let me know if you want anything added to the bot and I might be able to add it."
				);
			return message;

			// return (
			// 	new MessageEmbed()
			// 		.setColor("#159bfc")
			// 		.setTitle("Astra Bot: Help")
			// 		.setDescription("This is the help section for this bot, you can find commands here.")
			// 		.setThumbnail(
			// 			"https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXN0cm9uYXV0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
			// 		)
			// 		// .setImage(
			// 		// 	"https://c4.wallpaperflare.com/wallpaper/613/108/884/artistic-psychedelic-wallpaper-preview.jpg"
			// 		// )
			// 		.setTimestamp()
			// 		.addField(
			// 			"**Random**",
			// 			`**Random Number:** astra random number
			// 		**Random Message:** astra random message
			// 		**Random Dog Image:** astra random dog
			// 		**Random Cat Image:** astra random cat`
			// 		)
			// 		.addField(
			// 			"**Quotes**",
			// 			`**Breaking Bad Quote:** astra breaking bad
			// 			**Chuck Norris Quote:** astra chuck norris
			// 			**Anime Quote:** astra anime quote`
			// 		)
			// 		.addField(
			// 			"**Games**",
			// 			`**Dice:** astra dice
			// 		**Rock Paper Scissors:** astra rps`
			// 		)
			// 		.addField(
			// 			"**Other**",
			// 			`**Bored:** astra bored
			// 		**Be Like Bill:** astra blb (Your name)
			// 		**Weather:** astra weather (Location)
			// 		**Spam:** astra spam (Your message, default: Spamming)
			// 		**Spam Control:** astra turnon/turnoff spam`
			// 		)
			// 		.addField("Source Code (If your interested)", "https://github.com/TwitoCode/Astra")
			// 		.addField(
			// 			"The End",
			// 			"Let me know if you want anything added to the bot and I might be able to add it."
			// 		)
			// );
		} catch (err) {
			return devError(err);
		}
	}
}
