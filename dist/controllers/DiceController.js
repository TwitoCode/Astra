"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceController = void 0;
const chalk_1 = __importDefault(require("chalk"));
const random_1 = require("../utils/random");
class DiceController {
    handleCommand({ command }) {
        try {
            const [, commandType] = command.split(" ");
            if (commandType !== "dice")
                return "";
            const number = random_1.random(1, 6);
            return `${number} was rolled`;
        }
        catch (err) {
            throw new Error(chalk_1.default.redBright.bold(err.message));
        }
    }
}
exports.DiceController = DiceController;
