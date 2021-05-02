interface ECommerceProductProtocol {
  name: string
  price: number
}

class DiscountStrategy {
  protected discount = 0

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal()
  }
}

class MondayDiscount extends DiscountStrategy {
  protected discount = 0

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal()
    this.discount = 20

    return total - total * (this.discount / 100)
  }
}

class ThursdayDiscount extends DiscountStrategy {
  protected discount = 0

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal()
    this.discount = 10

    return total - total * (this.discount / 100)
  }
}

class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = []
  private _discountStrategy: DiscountStrategy = new DiscountStrategy()

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product))
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0)
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this)
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount
  }
}

const cart = new ECommerceShoppingCart()

const today = new Date().getDay() + 1

switch (today) {
  case 1:
    cart.discount = new MondayDiscount()
    break
  case 4:
    cart.discount = new ThursdayDiscount()
}

cart.addProduct({ name: 'Cafe', price: 100})

console.log(cart.getTotal())
console.log(cart.getTotalWithDiscount())