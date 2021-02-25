"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockPaperScissorsController = void 0;
const random_1 = require("../utils/random");
class RockPaperScissorsController {
    constructor() {
        this.options = ["Rock", "Paper", "Scissors"];
    }
    handleCommand({ command }) {
        const [, commandType] = command.split(" ");
        if (commandType !== "rps")
            return "";
        const index = random_1.random(0, this.options.length - 1);
        return `${this.options[index]}`;
    }
}
exports.RockPaperScissorsController = RockPaperScissorsController;
