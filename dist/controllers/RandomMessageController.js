"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomMessageController = void 0;
const messages_1 = require("../assets/messages");
const random_1 = require("../utils/random");
class RandomMessageController {
    handleCommand({ command }) {
        const [, commandType, commandValue] = command.split(" ");
        if (commandType !== "random")
            return "";
        if (commandValue !== "message")
            return "";
        const index = random_1.random(1, messages_1.randomMessages.length);
        return messages_1.randomMessages[index];
    }
}
exports.RandomMessageController = RandomMessageController;
