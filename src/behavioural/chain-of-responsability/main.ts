// Specialty Coffee Classification System

// Type: if arabic = approved
// GreenBeanScore: if >= 80 => approved
// SensorialScore: if >= 80 => approved

// If it gets notApprove in any, it is desclassified

import { Coffee } from './coffee'
import { TypeHandler } from './typeHandler'
import { GreenBeanHandler } from './greenBeanHandler'
import { SensorialHandler } from './sensorialHandler'

// const coffeeOne = new Coffee("arabic", 80, 80);
const coffeeOne = new Coffee("robust", 80, 80);
// const coffeeOne = new Coffee("arabic", 70, 80);
// const coffeeOne = new Coffee("arabic", 80, 70);

const validation = new TypeHandler();
validation
  .setNextHandler(new GreenBeanHandler())
  .setNextHandler(new SensorialHandler());

validation.handle(coffeeOne);
console.log(coffeeOne);
