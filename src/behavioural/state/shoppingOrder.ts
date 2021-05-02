import { ShoppingOrderState } from './shoppingOrderState';
import { OrderPending } from './states/orderPending';

export class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState): void {
    this.state = state;
    console.log(`O estado do pedido agora é ${this.getStateName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  approveOrder(): void {
    this.state.approveOrder()
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  cancelOrder(): void {
    this.state.cancelOrder();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  sentOrder(): void {
    this.state.sentOrder()
  }

  finishOrder(): void {
    this.state.finishOrder()
  }
}