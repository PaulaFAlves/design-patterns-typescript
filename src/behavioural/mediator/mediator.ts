import { SellerProduct } from './sellerProduct';
import { Seller } from './seller'

export class Mediator {
    private sellers: Seller[] = []

    addSeller(...sellers: Seller[]): void {
        sellers.forEach(seller => {
            this.sellers.push(seller)
            seller.setMediator(this);
        })
    }

    buy(id: string): SellerProduct | void {
        let product

        for (let i = 0; i < this.sellers.length; i++) {
            product = this.sellers[i].sell(id)

            if (product) {
                console.log(`*** Product ${product.id}-${product.name} bought from ${this.sellers[i].name} for ${product.price}`)
                return
            }
        }

        console.log('Product not found')

    }

    showProducts(): void {
        this.sellers.forEach(seller => seller.showProducts())
    }
}