import { OrderRejected } from './orderRejected';
import { ShoppingOrder } from '../shoppingOrder';
import { ShoppingOrderState } from '../shoppingOrderState';
import { OrderApproved } from './orderApproved';
import { OrderPending } from './orderPending';
import { OrderSent } from './orderSent';
import { OrderFinished } from './orderFinished';

export class OrderCancelled implements ShoppingOrderState {
  private name = 'Cancelado'

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name
  }

  waitPayment(): void {
    console.log('O pedido já foi cancelado')
  }

  rejectPayment(): void {
    console.log('O pedido já foi cancelado')
  }

  cancelOrder(): void {
    console.log('O pedido já está no estado pagamento cancelado')
  }

  approveOrder(): void {
    console.log('O pedido já foi cancelado')
  }

  sentOrder(): void {
    console.log('O pedido já foi cancelado')
  }

  finishOrder(): void {
    this.order.setState(new OrderFinished(this.order))
  }
}