// Invoker - button
import { SmartCoffeeShopCommand } from "./smartCoffeeShopCommand";

export class SmartCoffeeShopApp {
  private commands: { [k: string]: SmartCoffeeShopCommand } = {};

  addCommand(key: string, command: SmartCoffeeShopCommand): void {
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}
