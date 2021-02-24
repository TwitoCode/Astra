import { random } from "../utils/random";
import { Controller } from "./Controller";

export class DiceController implements Controller {
  handleCommand(command: string) {
    const [, commandType] = command.split(" ");
    if (commandType !== "dice") return "";

    const number = random(1, 6);
    return `${number} was rolled`;
  }
}