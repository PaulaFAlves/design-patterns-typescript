import { BaseHandler } from './baseHandler'
import { Coffee } from './coffee'

export class GreenBeanHandler extends BaseHandler {
  handle(coffee: Coffee): Coffee {
    if (coffee.greenBeanScore < 80) {
      coffee.notApproved = true;
      console.log("Coffee not approved on score of green bean");
      return coffee;
    }
    return super.handle(coffee);
  }
}
