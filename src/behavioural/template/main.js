class Customer {
  constructor(name, id, total) {
    this.name = name
    this.id = id
    this.total = total
  }
  toString() {
    console.log(`Pessoa física: ${this.name} - ${this.id} - R$ ${this.total}`)
  }
}

class PF extends Customer {
  constructor(name, id, total) {
    super(name, id, total)
  }
  calculateTotalPF() {
    console.log(`Total: R$ ${this.total * 1}`)
  }
}

class PJ extends Customer {
  constructor(name, id, total) {
    super(name, id, total)
  }
  calculateTotalPJ() {
    console.log(`Total: R$ ${this.total * 0.8}`)
  }
  sendEmailToPJ() {
    console.log('Email promocional enviado para PJ')
  }
}

const paula = new PF('Paula', 1212, 100)
const leandro = new PJ('Leandro', 4444, 100)

paula.toString()
paula.calculateTotalPF()

console.log('----------')

leandro.toString()
leandro.calculateTotalPJ()
leandro.sendEmailToPJ()
