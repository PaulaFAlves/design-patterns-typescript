import { OrderRejected } from './orderRejected';
import { ShoppingOrder } from '../shoppingOrder';
import { ShoppingOrderState } from '../shoppingOrderState';
import { OrderApproved } from './orderApproved';
import { OrderFinished } from './orderFinished';
import { OrderPending } from './orderPending';
import { OrderCancelled } from './orderCancelled';

export class OrderSent implements ShoppingOrderState {
  private name = 'Enviado'

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name
  }

  waitPayment(): void {
    console.log('O pedido já está no estado enviado')
  }

  rejectPayment(): void {
    console.log('O pedido já está no estado enviado')
  }

  cancelOrder(): void {
    console.log('O pedido já está no estado enviado')
  }

  approveOrder(): void {
    console.log('O pedido já está no estado enviado')
  }

  sentOrder(): void {
    console.log('O pedido já está no estado enviado')
  }

  finishOrder(): void {
    this.order.setState(new OrderFinished(this.order))
  }
}