import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const seller1 = new Seller('Tres Coracoes')
seller1.addProduct({id: '1', name: 'Tradicional', price: 25})
seller1.addProduct({id: '2', name: 'Mogiana', price: 36})

const seller2 = new Seller('Orfeu')
seller2.addProduct({id: '3', name: 'Cerrado Mineiro', price: 23})

const seller3 = new Seller('Melitta')
seller3.addProduct({id: '4', name: 'Regiões', price: 25})
seller3.addProduct({id: '5', name: 'Solúvel', price: 36})

const mediator = new Mediator()
mediator.addSeller(seller1, seller2, seller3)

const buyer = new Buyer(mediator)
buyer.viewProducts()
buyer.buy('1')
buyer.buy('2')
buyer.viewProducts()

