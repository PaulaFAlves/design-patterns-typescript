// Receiver - commands interface - invoker

import { SmartLight } from "./smartLight";
import { SmartCoffeeShopApp } from "./smartCoffeeShopApp";
import { LightPowerCommand } from "./lightPowerCommand";
import { SmartCoffeeMachine } from "./smartCoffeeMachine";
import { CoffeeMachinePowerCommand } from './coffeeMachinePowerCommand'

// Receiver - equipament (tv, light...)
const coffeeShopLight = new SmartLight("Coffee Shop Light");
const coffeeShopMachine = new SmartCoffeeMachine("Coffee Machine");

// Command - where commands are defined
const coffeeShopLightPowerCommand = new LightPowerCommand(coffeeShopLight);
const coffeeShopMachinePowerCommand = new CoffeeMachinePowerCommand(coffeeShopMachine);

// Invoker - who is calling the commands
const smartHouseApp = new SmartCoffeeShopApp();

// Control
smartHouseApp.addCommand("lights", coffeeShopLightPowerCommand);
smartHouseApp.addCommand("coffee-machine", coffeeShopMachinePowerCommand);


smartHouseApp.executeCommand("lights");
smartHouseApp.executeCommand("coffee-machine");
smartHouseApp.undoCommand("coffee-machine");
smartHouseApp.undoCommand("lights");

