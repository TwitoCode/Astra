import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface WeatherResponse {
	error?: object;
	current: {
		temp_c: number;
		is_day: number;
		condition: {
			text: string;
		};
		humidity: number;
		feelslike_c: number;
	};
}

export class WeatherController extends Controller {
	async handleCommand(options: HandleCommandOptions) {
		try {
			const command = this.getCommand({
				expectedMessage: "weather",
				inputMessage: true,
				messageOptions: options,
			});

			if (!command) return null;

			const [_, commandValue] = command;

			const res = (await (
				await fetch(
					`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${commandValue}&aqi=no`
				)
			).json()) as WeatherResponse;

			if (res.error) return "That place does not exist can you not spell? smh";

			const { current } = res;

			return `**Temperature:** ${current.temp_c} | **Feels Like:** ${current.feelslike_c} | **Humidity:** ${
				current.humidity
			}, ${current.condition.text} | **Day/Night:** ${current.is_day === 0 ? "Night" : "Day"}`;
		} catch (err) {
			return devError(err);
		}
	}
}
