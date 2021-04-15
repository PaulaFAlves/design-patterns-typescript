// Command interface
export interface SmartCoffeeShopCommand {
  execute(): void;
  undo(): void;
}
