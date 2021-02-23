import chalk from "chalk";
import express from "express";

const app = express();

app.get("/", (_, res) => res.send("Astra Bot Server"));

export function initServer() {
	app.listen(process.env.PORT, () => console.log(chalk.blueBright.bold("Astra Server is Running!")));
}
