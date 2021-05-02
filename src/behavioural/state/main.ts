import { ShoppingOrder } from './shoppingOrder';

const order = new ShoppingOrder(); // Pendente
console.log(order.getStateName())
// order.waitPayment();

order.approveOrder()
console.log(order.getStateName())

order.sentOrder()
console.log(order.getStateName())
// order.approveOrder()

order.finishOrder()
console.log(order.getStateName())

