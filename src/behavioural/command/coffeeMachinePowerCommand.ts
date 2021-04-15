// Commands - send command to the receiver
import { SmartCoffeeShopCommand } from "./smartCoffeeShopCommand";
import { SmartCoffeeMachine } from "./smartCoffeeMachine";

export class CoffeeMachinePowerCommand implements SmartCoffeeShopCommand {
  constructor(private readonly light: SmartCoffeeMachine) { }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
