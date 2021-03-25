import { BaseHandler } from './baseHandler'
import { Coffee } from './coffee'

export class SensorialHandler extends BaseHandler {
  handle(coffee: Coffee): Coffee {
    if (coffee.sensorialScore < 80) {
      coffee.notApproved = true;
      console.log("Coffee not approved on sensorial score");
      return coffee;
    }
    return super.handle(coffee);
  }
}
