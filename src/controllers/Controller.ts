export interface Controller {
  handleCommand: (command: string, messageContent?: string) => string;
}