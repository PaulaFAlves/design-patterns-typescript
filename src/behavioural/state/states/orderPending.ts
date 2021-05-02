import { OrderCancelled } from './orderCancelled';
import { OrderSent } from './orderSent';
import { OrderRejected } from './orderRejected';
import { ShoppingOrder } from '../shoppingOrder';
import { ShoppingOrderState } from '../shoppingOrderState';
import { OrderApproved } from './orderApproved';
import { OrderFinished } from './orderFinished';

export class OrderPending implements ShoppingOrderState {
  private name = 'Pendente'

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name
  }

  waitPayment(): void {
    console.log('O pedido já está no estado Pendente')
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order))
  }

  cancelOrder(): void {
    this.order.setState(new OrderCancelled(this.order))
  }

  approveOrder(): void {
    this.order.setState(new OrderApproved(this.order))
  }

  sentOrder(): void {
    console.log('O pedido não pode ser enviado, pois esta pendente')
  }

  finishOrder(): void {
    console.log('O pedido nåo pode ser finalizado, somente se estiver Enviado, Rejeitado ou Cancelado.')
  }
}