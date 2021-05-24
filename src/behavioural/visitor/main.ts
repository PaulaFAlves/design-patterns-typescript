abstract class VisitableProduct {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  abstract getPriceWithTaxes(visitor: TaxVisitorProtocol): number
}

class GreenBean extends VisitableProduct {
  constructor(name: string, price: number) {
    super(name, price)
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForGreenBean(this)
  }
}

class RoastedBean extends VisitableProduct {
  constructor(name: string, price: number) {
    super(name, price)
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForRoastedBean(this)
  }
}

interface TaxVisitorProtocol {
  calculateTaxForGreenBean(greenBean: GreenBean): number;
  calculateTaxForRoastedBean(RoastedBean: RoastedBean): number;
}

class MinasGeraisTaxVisitor implements TaxVisitorProtocol {
  calculateTaxForGreenBean(greenBean: GreenBean): number {
    return greenBean.price * 1.2
  }
  calculateTaxForRoastedBean(roastedBean: RoastedBean): number {
    return roastedBean.price * 1.5
  }
}

class EspiritoSantoTaxVisitor implements TaxVisitorProtocol {
  calculateTaxForGreenBean(greenBean: GreenBean): number {
    return greenBean.price * 1.3
  }
  calculateTaxForRoastedBean(roastedBean: RoastedBean): number {
    return roastedBean.price * 1.6
  }
}

// Products
const greenBeanBourbonVermelho = new GreenBean('Bourbon Verde', 800)
const greenBeanAcaia = new GreenBean('Acaia Verde', 1000)
const roastedBeanBourbonVermelho = new RoastedBean('Bourbon Torrado', 1200)
const roastedBeanAcaia = new RoastedBean('Acaia Torrado', 1500)

// Visitors
const minasgeraisTaxVisitor = new MinasGeraisTaxVisitor()
const espiritoSantoTaxVisitor = new EspiritoSantoTaxVisitor()

// products list
const products = [greenBeanBourbonVermelho, greenBeanAcaia, roastedBeanBourbonVermelho, roastedBeanAcaia]

console.log('Preços com imposto de MG')
products.map((item) => console.log(`Produto: ${item.name} - Preço: ${item.price} - Preço com imposto: ${item.getPriceWithTaxes(minasgeraisTaxVisitor)}`))

console.log('----------------')

console.log('Preços com imposto de ES')
products.map((item) => console.log(`Produto: ${item.name} - Preço: ${item.price} - Preço com imposto: ${item.getPriceWithTaxes(espiritoSantoTaxVisitor)}`))

// console.log(greenBeanBourbonVermelho)
