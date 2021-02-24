"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBot = void 0;
const chalk_1 = __importDefault(require("chalk"));
const discord_js_1 = require("discord.js");
const DiceController_1 = require("./controllers/DiceController");
const RandomMessageController_1 = require("./controllers/RandomMessageController");
const RandomNumberController_1 = require("./controllers/RandomNumberController");
const SpamController_1 = require("./controllers/SpamController");
const loop_1 = require("./utils/loop");
class Client {
    constructor(controllers) {
        this.client = new discord_js_1.Client();
        this.controllers = controllers;
        this.client.login(process.env.BOT_TOKEN);
        this.client.once("ready", () => console.log(chalk_1.default.greenBright.bold("Astra Bot is Running!")));
        this.commandHandler();
    }
    commandHandler() {
        const { client, controllers } = this;
        client.on("message", (message) => {
            const [prefix] = message.content.toLowerCase().split(" ");
            if (prefix !== "astra")
                return;
            controllers.forEach((controller) => {
                const output = controller.handleCommand(message.content.toLowerCase(), message.content);
                if (controller instanceof SpamController_1.SpamController) {
                    return output !== "" && loop_1.loop(() => message.channel.send(output), 5);
                }
                output !== "" && message.channel.send(output);
            });
        });
    }
}
function initBot() {
    new Client([
        new DiceController_1.DiceController(),
        new RandomNumberController_1.RandomNumberController(),
        new RandomMessageController_1.RandomMessageController(),
        new SpamController_1.SpamController(),
    ]);
}
exports.initBot = initBot;
