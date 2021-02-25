"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpamControlController = void 0;
const hasRole_1 = require("../utils/hasRole");
class SpamControlController {
    constructor(settings) {
        this.settings = settings;
    }
    async handleCommand({ command, message }) {
        const [, commandType, commandValue] = command.split(" ");
        if (!hasRole_1.hasRole(message.member, process.env.ADMIN_ROLE || process.env.OWNER_ROLE || process.env.SPECIAL_ROLE))
            return "";
        console.log(commandType, commandValue);
        if (commandValue !== "spam")
            return "";
        if (commandType === "turnoff")
            this.settings.spamming = false;
        if (commandType === "turnon")
            this.settings.spamming = true;
        this.settings.save();
        return `Spamming is turned ${this.settings.spamming ? "on" : "off"}`;
    }
}
exports.SpamControlController = SpamControlController;
