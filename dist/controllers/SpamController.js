"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpamController = void 0;
class SpamController {
    handleCommand(command, messageContent) {
        const [, commandType] = command.split(" ");
        const [, , ...commandValue] = messageContent.split(" ");
        if (commandType !== "spam")
            return "";
        if (commandValue.length === 0)
            return "Spamming";
        return commandValue.join(" ");
    }
}
exports.SpamController = SpamController;
