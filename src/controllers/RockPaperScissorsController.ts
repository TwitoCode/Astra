import { random } from "../utils/random";
import { Controller } from "./Controller";

export class RockPaperScissorsController implements Controller {
  options: string[] = ["Rock", "Paper", "Scissors"];

  handleCommand(command: string) {
    const [, commandType] = command.split(" ");
    if (commandType !== "rps") return "";

    const index = random(0, this.options.length - 1);
    return `${this.options[index]}`;
  }
}