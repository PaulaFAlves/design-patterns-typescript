import { ShoppingOrder } from '../shoppingOrder';
import { ShoppingOrderState } from '../shoppingOrderState';
import { OrderCancelled } from './orderCancelled';
import { OrderFinished } from './orderFinished';
import { OrderPending } from './orderPending';
import { OrderRejected } from './orderRejected';
import { OrderSent } from './orderSent';

export class OrderApproved implements ShoppingOrderState {
  private name = 'Aprovado'

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name
  }

  waitPayment(): void {
    console.log('O pedido já foi aprovado aprovado')
  }
  
  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order))
  }

  cancelOrder(): void {
    this.order.setState(new OrderCancelled(this.order))
  }
  
  approveOrder(): void {
    console.log('O pedido já está no estado pagamento aprovado')
  }
  
  sentOrder(): void {
    this.order.setState(new OrderSent(this.order))
  }

  finishOrder(): void {
    this.order.setState(new OrderFinished(this.order))
  }
}