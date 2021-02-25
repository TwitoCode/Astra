"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockPaperScissorsController = void 0;
const chalk_1 = __importDefault(require("chalk"));
const random_1 = require("../utils/random");
class RockPaperScissorsController {
    constructor() {
        this.options = ["Rock", "Paper", "Scissors"];
    }
    handleCommand({ command }) {
        try {
            const [, commandType] = command.split(" ");
            if (commandType !== "rps")
                return "";
            const index = random_1.random(0, this.options.length - 1);
            return `${this.options[index]}`;
        }
        catch (err) {
            throw new Error(chalk_1.default.redBright.bold(err.message));
        }
    }
}
exports.RockPaperScissorsController = RockPaperScissorsController;
