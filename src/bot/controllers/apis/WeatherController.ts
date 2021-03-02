import fetch from "node-fetch";
import { devError } from "../../utils/devError";
import { Controller, HandleCommandOptions } from "../Controller";

interface WeatherResponse {
	current: {
		temp_c: -3.0;
		is_day: 0;
		condition: {
			text: "Partly cloudy";
		};
		humidity: 50;
		feelslike_c: -11.1;
	};
}

export class WeatherController implements Controller {
	loopResponse: false;

	async handleCommand({ command }: HandleCommandOptions) {
		try {
			const [, commandType, commandValue] = command.split(" ");

			if (commandType !== "weather") return null;
			if (!commandValue) return null;

			const { current } = (await (
				await fetch(
					`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${commandValue}&aqi=no`
				)
			).json()) as WeatherResponse;

			return `**Temperature:** ${current.temp_c} | **Feels Like:** ${current.feelslike_c} | **Humidity:** ${
				current.humidity
			}, ${current.condition.text} | **Day/Night:** ${current.is_day === 0 ? "Night" : "Day"}`;
		} catch (err) {
			return devError(err);
		}
	}
}
