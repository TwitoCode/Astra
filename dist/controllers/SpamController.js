"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpamController = void 0;
const chalk_1 = __importDefault(require("chalk"));
class SpamController {
    constructor(settings) {
        this.settings = settings;
    }
    handleCommand({ command, messageContent }) {
        try {
            if (this.settings.spamming === false)
                return "";
            const [, commandType] = command.split(" ");
            const [, , ...commandValue] = messageContent.split(" ");
            if (commandType !== "spam")
                return "";
            if (commandValue.length === 0)
                return "Spamming";
            return commandValue.join(" ");
        }
        catch (err) {
            throw new Error(chalk_1.default.redBright.bold(err.message));
        }
    }
}
exports.SpamController = SpamController;
