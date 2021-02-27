import mongoose from "mongoose";
import chalk from "chalk";

export async function initDatabase() {
	try {
		mongoose.set("useCreateIndex", true);
		mongoose.connect(process.env.DATABASE_ACCESS!, { useNewUrlParser: true, useUnifiedTopology: true });
	} catch (err) {
		console.log(chalk.redBright.bold(err.message));
	}
}
