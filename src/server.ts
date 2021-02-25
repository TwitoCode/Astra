import chalk from "chalk";
import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", (_, res) => res.send("Astra Bot Server"));

export function initServer() {
	app.listen(process.env.PORT, () => console.log(chalk.red("Astra Server is Running!")));
	ping();
}

function ping() {
	const tenMinutes = 600000;

	setInterval(() => {
		const hour = new Date().getHours();
		const canPing = !(hour >= 0 && hour < 6);

		if (canPing) {
			console.log("I have fetched");
			fetch(process.env.SERVER_URL!);
			return;
		}

		console.log("The bot is down");
	}, tenMinutes);
}
