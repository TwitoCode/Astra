import chalk from "chalk";

export function devError(err: Error) {
	if (process.env.NODE_ENV === "development") throw new Error(chalk.redBright.bold(err.message));
	else return "Bot is not working, maybe it's because of you? :)";
}
