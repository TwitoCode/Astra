"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceController = void 0;
const random_1 = require("../utils/random");
class DiceController {
    handleCommand({ command }) {
        const [, commandType] = command.split(" ");
        if (commandType !== "dice")
            return "";
        const number = random_1.random(1, 6);
        return `${number} was rolled`;
    }
}
exports.DiceController = DiceController;
