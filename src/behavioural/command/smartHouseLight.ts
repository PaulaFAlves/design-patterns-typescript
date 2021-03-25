// Receiver - light, tv, ...
export class SmartHouseLight {
  private isOn = false;

  constructor(private name: string) { }

  getPowerStatus(): string {
    return this.isOn ? "ON" : "OFF";
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} is now ${this.getPowerStatus()}`);
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} is now ${this.getPowerStatus()}`);
    return this.isOn;
  }
}
