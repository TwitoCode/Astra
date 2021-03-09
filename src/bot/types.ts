export interface Commands {
	[x: string]: Command[];
}

export interface Command {
	name: string;
	commandExample: string;
}
