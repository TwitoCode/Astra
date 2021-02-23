"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBot = void 0;
const chalk_1 = __importDefault(require("chalk"));
const discord_js_1 = require("discord.js");
const messages_1 = require("./messages");
const loop_1 = require("./utils/loop");
const random_1 = require("./utils/random");
const client = new discord_js_1.Client();
client.on("message", (message) => {
    const [initializeCommand, command, value, ...sentMessage] = message.content.split(" ");
    const messageAfterCommand = `${value} ${sentMessage.join(" ")}`;
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
    if (command === "spam") {
        if (value?.length > 0) {
            return loop_1.loop(() => message.channel.send(messageAfterCommand), 5);
        }
        return loop_1.loop(() => message.channel.send("Spam"), 5);
    }
});
function initBot() {
    client.login(process.env.BOT_TOKEN);
    client.once("ready", () => console.log(chalk_1.default.greenBright.bold("Astra Bot is Running!")));
}
exports.initBot = initBot;
