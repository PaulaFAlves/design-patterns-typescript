// Interface
export interface Handler {
  setNextHandler(handler: Handler): Handler;

  handle(coffee: Coffee): Coffee;
}
