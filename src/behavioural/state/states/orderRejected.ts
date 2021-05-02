import { OrderSent } from './orderSent';
import { ShoppingOrder } from '../shoppingOrder';
import { ShoppingOrderState } from '../shoppingOrderState';
import { OrderApproved } from './orderApproved';
import { OrderPending } from './orderPending';
import { OrderFinished } from './orderFinished';

export class OrderRejected implements ShoppingOrderState {
  private name = 'Order rejected'

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name
  }

  waitPayment(): void {
    this.order.setState(new OrderPending(this.order))
  }
  
  rejectPayment(): void {
    console.log('O pedido já está no estado pagamento recusado')
  }
  cancelOrder(): void {}

  approveOrder(): void {
    console.log('O pedido foi recusado recusado')
  }

  sentOrder(): void {
    console.log('O pedido foi recusado recusado')
  }

  finishOrder(): void {
    this.order.setState(new OrderFinished(this.order))
  }
}