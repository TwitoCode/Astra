"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const chalk_1 = __importDefault(require("chalk"));
const discord_js_1 = require("discord.js");
const SpamController_1 = require("./controllers/SpamController");
const loop_1 = require("./utils/loop");
class Bot {
    constructor(controllers) {
        this.client = new discord_js_1.Client();
        this.controllers = controllers;
        this.client.login(process.env.BOT_TOKEN);
        this.client.once("ready", () => console.log(chalk_1.default.cyan("Astra Bot is Running!")));
        this.commandHandler();
    }
    async commandHandler() {
        const { client, controllers } = this;
        client.on("message", (message) => {
            const [prefix] = message.content.toLowerCase().split(" ");
            if (prefix !== "astra")
                return;
            controllers.forEach(async (controller) => {
                const output = await controller.handleCommand({
                    command: message.content.toLowerCase(),
                    messageContent: message.content,
                    message,
                });
                if (controller instanceof SpamController_1.SpamController) {
                    return output !== "" && loop_1.loop(() => message.channel.send(output), 5);
                }
                output !== "" && message.channel.send(output);
            });
        });
    }
}
exports.Bot = Bot;
