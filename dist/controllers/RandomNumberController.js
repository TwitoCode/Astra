"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberController = void 0;
const chalk_1 = __importDefault(require("chalk"));
const random_1 = require("../utils/random");
class RandomNumberController {
    handleCommand({ command }) {
        try {
            const [, commandType, commandValue] = command.split(" ");
            if (commandType !== "random")
                return "";
            if (commandValue !== "number")
                return "";
            return random_1.random(1, 100).toString();
        }
        catch (err) {
            throw new Error(chalk_1.default.redBright.bold(err.message));
        }
    }
}
exports.RandomNumberController = RandomNumberController;
