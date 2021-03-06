// Commands - send command to the receiver
import { SmartCoffeeShopCommand } from "./smartCoffeeShopCommand";
import { SmartLight } from "./smartLight";

export class LightPowerCommand implements SmartCoffeeShopCommand {
  constructor(private readonly light: SmartLight) { }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
