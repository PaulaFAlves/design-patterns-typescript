import { BaseHandler } from './baseHandler'
import { Coffee } from './coffee'

export class TypeHandler extends BaseHandler {
  handle(coffee: Coffee): Coffee {
    if (coffee.type !== "arabic") {
      coffee.notApproved = true;
      console.log("Coffee not approved on type");
      return coffee;
    }
    return super.handle(coffee);
  }
}
