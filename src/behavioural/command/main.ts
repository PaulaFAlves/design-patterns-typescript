import { SmartHouseLight } from "./smartHouseLight";
import { SmartHouseApp } from "./smartHouseApp";
import { LightPowerCommand } from "./lightPowerCommand";

// Receiver - equipament (tv, light...)
const bedroomLight = new SmartHouseLight("Luz do quarto");
const bathroomLight = new SmartHouseLight("Luz do banheiro");

// Command - where commands are defined
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

// Invoker - who is calling the commands
const smartHouseApp = new SmartHouseApp();

// Control
smartHouseApp.addCommand("btn-1", bedroomLightPowerCommand);
smartHouseApp.executeCommand("btn-1");
smartHouseApp.undoCommand("btn-1");

smartHouseApp.addCommand("btn-2", bathroomLightPowerCommand);
smartHouseApp.executeCommand("btn-2");
