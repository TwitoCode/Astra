"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpamControlController = void 0;
const chalk_1 = __importDefault(require("chalk"));
const hasRole_1 = require("../utils/hasRole");
class SpamControlController {
    constructor(settings) {
        this.settings = settings;
    }
    async handleCommand({ command, message }) {
        try {
            const [, commandType, commandValue] = command.split(" ");
            if (!hasRole_1.hasRole(message.member, process.env.ADMIN_ROLE || process.env.OWNER_ROLE || process.env.SPECIAL_ROLE))
                return "You scrub your not special enough to do that";
            if (commandValue !== "spam")
                return "";
            if (commandType === "turnoff")
                this.settings.spamming = false;
            if (commandType === "turnon")
                this.settings.spamming = true;
            this.settings.save();
            return `Spamming is turned ${this.settings.spamming ? "on" : "off"}`;
        }
        catch (err) {
            throw new Error(chalk_1.default.redBright.bold(err.message));
        }
    }
}
exports.SpamControlController = SpamControlController;
