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
            const memberHasRole = hasRole_1.hasRole(message.member, process.env.ADMIN_ROLE || process.env.OWNER_ROLE || process.env.SPECIAL_ROLE);
            if (commandValue !== "spam")
                return "";
            if (commandType === "turnoff" && memberHasRole) {
                this.settings.spamming = false;
                this.settings.save();
            }
            else if (commandType === "turnon" && memberHasRole) {
                this.settings.spamming = true;
                this.settings.save();
            }
            else {
                return "You scrub your not special enough to do that";
            }
            return `Spamming is turned ${this.settings.spamming ? "on" : "off"}`;
        }
        catch (err) {
            throw new Error(chalk_1.default.redBright.bold(err.message));
        }
    }
}
exports.SpamControlController = SpamControlController;
