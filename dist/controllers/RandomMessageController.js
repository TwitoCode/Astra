"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomMessageController = void 0;
const chalk_1 = __importDefault(require("chalk"));
const messages_1 = require("../assets/messages");
const random_1 = require("../utils/random");
class RandomMessageController {
    handleCommand({ command }) {
        try {
            const [, commandType, commandValue] = command.split(" ");
            if (commandType !== "random")
                return "";
            if (commandValue !== "message")
                return "";
            const index = random_1.random(1, messages_1.randomMessages.length);
            return messages_1.randomMessages[index];
        }
        catch (err) {
            throw new Error(chalk_1.default.redBright.bold(err.message));
        }
    }
}
exports.RandomMessageController = RandomMessageController;
