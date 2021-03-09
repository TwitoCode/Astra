import chalk from "chalk";
import mongoose from "mongoose";

export async function initDatabase() {
	try {
		mongoose.set("useCreateIndex", true);
		
		const connect = () =>
			mongoose.connect(process.env.DATABASE_ACCESS!, { useNewUrlParser: true, useUnifiedTopology: true });

		connect();

		mongoose.connection.on("error", (err) => {
			connect();
			console.log(err);
		});
	} catch (err) {
		console.log(chalk.redBright.bold(err.message));
	}
}
