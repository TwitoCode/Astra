"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const discord_js_1 = require("discord.js");
require("dotenv/config");
const messages_1 = require("./messages");
const random_1 = require("./utils/random");
const client = new discord_js_1.Client();
client.login(process.env.BOT_TOKEN);
client.once("ready", () => console.log(chalk_1.default.blueBright.bold("Astra is Running!")));
client.on("message", (message) => {
    const [initializeCommand, command, value] = message.content.split(" ");
    if (message.content.length === 0)
        return;
    if (initializeCommand !== "astra")
        return;
    if (command === "random") {
        if (value === "message") {
            const index = random_1.random(1, messages_1.randomMessages.length);
            return message.channel.send(messages_1.randomMessages[index]);
        }
        if (value === "number") {
            return message.channel.send(random_1.random(1, 100));
        }
    }
    if (command === "dice") {
        return message.channel.send(`${random_1.random(1, 6)} was rolled`);
    }
});
