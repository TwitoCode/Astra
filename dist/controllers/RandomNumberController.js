"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberController = void 0;
const random_1 = require("../utils/random");
class RandomNumberController {
    handleCommand(command) {
        const [, commandType, commandValue] = command.split(" ");
        if (commandType !== "random")
            return "";
        if (commandValue !== "number")
            return "";
        return random_1.random(1, 100).toString();
    }
}
exports.RandomNumberController = RandomNumberController;
