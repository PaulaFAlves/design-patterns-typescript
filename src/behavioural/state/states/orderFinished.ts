import { OrderSent } from './orderSent';
import { OrderRejected } from './orderRejected';
import { ShoppingOrder } from '../shoppingOrder';
import { ShoppingOrderState } from '../shoppingOrderState';
import { OrderApproved } from './orderApproved';
import { OrderPending } from './orderPending';

export class OrderFinished implements ShoppingOrderState {
  private name = 'Finalizado'

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name
  }

  waitPayment(): void {
    console.log('O pedido já foi finalizado')
  }

  rejectPayment(): void {
    console.log('O pedido já foi finalizado')
  }

  cancelOrder(): void {
    console.log('O pedido já foi finalizado')
  }

  approveOrder(): void {
    console.log('O pedido já foi finalizado')
  }

  sentOrder(): void {
    console.log('O pedido já foi finalizado')
  }

  finishOrder(): void {
    console.log('O pedido já está no estado concluido')
  }
}