import { SellerProduct } from './sellerProduct';
import { Mediator } from './mediator';

export class Seller {
    private products: SellerProduct[] = []
    private mediator?: Mediator
    name: string

    constructor(name: string) {
        this.name = name
    }

    showProducts(): void {
        console.log(`------ ${this.name} Products List ------`)
        this.products.forEach(product => console.log(`Id: ${product.id}, Product: ${product.name}, Price: ${product.price}`))
        console.log('')
    }

    addProduct(...products: SellerProduct[]): void {
        products.forEach(product => this.products.push(product))
    }

    setMediator(mediator: Mediator): void {
        this.mediator = mediator
    }

    sell(id: string): SellerProduct | void {
        const productIndex = this.products.findIndex(product => product.id === id)

        if (productIndex === -1) return

        const product = this.products.splice(productIndex, 1)
        return product[0]
    }
}