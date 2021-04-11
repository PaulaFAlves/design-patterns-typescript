import { MyIteratorInterface } from './myIteratorInterface';
import { myConcreteIterator } from "./myConcreteIterator"

export class MyDataStructure {
    private _items: string[] = []
    private iterator: MyIteratorInterface<string> = new myConcreteIterator(this)

    addItem(...items: string[]): void {
        items.forEach(item => this.items.push(item))
    }

    get items(): string[] {
        return this._items
    }

    size(): number {
        return this.items.length
    }

    changeIterator(iterator: MyIteratorInterface<string>): void {
        this.iterator = iterator
    } 

    [Symbol.iterator](): MyIteratorInterface<string> {
        this.iterator.reset()
        return this.iterator
    }
}

// se houvesse diferentes estrutura de dados, poderia utilizar interfaces.
// método symbol.iterator indica que a minha estrutura é iteravel.