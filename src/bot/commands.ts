import { Commands } from "./types";

export const commands: Commands = {
	Random: [
		{
			name: "Random Number",
			commandExample: "astra random number",
		},
		{
			name: "Random Cat",
			commandExample: "astra random cat",
		},
		{
			name: "Random Dog",
			commandExample: "astra random dog",
		},
		{
			name: "Random Message",
			commandExample: "astra random message",
		},
	],
	Other: [
		{
			name: "Bored",
			commandExample: "astra bored",
		},
		{
			name: "Be Like Bill",
			commandExample: "astra blb (Your name)",
		},

		{
			name: "Weather",
			commandExample: "astra weather (Location)",
		},
		{
			name: "Spam",
			commandExample: "astra spam (Your message, default: Spamming)",
		},
		{
			name: "Spam Control",
			commandExample: "astra turnon/turnoff spam",
		},
	],
	Games: [
		{
			name: "Dice",
			commandExample: "astra dice",
		},
		{
			name: "Rock Paper Scissors",
			commandExample: "astra rps",
		},
	],
	Quotes: [
		{
			name: "Breaking Bad Quote",
			commandExample: "astra breaking bad",
		},
		{
			name: "Anime Quote",
			commandExample: "astra anime quote",
		},
		{
			name: "Chuck Norris Quote",
			commandExample: "astra chuck norris",
		},
	],
};
