import { Coffee } from './coffee'
import { Handler } from './handler'

export abstract class BaseHandler implements Handler {
  protected nextHandler: Handler | null = null;

  setNextHandler(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(coffee: Coffee): Coffee {
    if (this.nextHandler) return this.nextHandler.handle(coffee);
    return coffee;
  }
}
