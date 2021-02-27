import { MessageEmbed } from "discord.js";
export function devSend(message: any) {
  if (message instanceof MessageEmbed) return message;
  
	if (process.env.NODE_ENV === "development") {
		return `DEV: ${message}`;
	}

	return message;
}
