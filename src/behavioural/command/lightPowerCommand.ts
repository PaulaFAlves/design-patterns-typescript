// Commands - send command to the receiver
import { SmartHouseCommand } from "./smartHouseCommand";
import { SmartHouseLight } from "./smartHouseLight";

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) { }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
