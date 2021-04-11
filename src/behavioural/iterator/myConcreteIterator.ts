import { MyDataStructure } from './myDataStructure';
import { MyIteratorInterface } from './myIteratorInterface';

export class myConcreteIterator implements MyIteratorInterface<string> {
    private index = 0

    constructor(private readonly dataStructure: MyDataStructure) {}

    reset(): void {
        this.index = 0
    }

    next(): IteratorResult<string> {
        const returnValue = this.makevalue(this.dataStructure.items[this.index])
        returnValue.done = this.index >= this.dataStructure.size()
        this.index++
        return returnValue
    }

    private makevalue(value: string): IteratorResult<string> {
        return { value, done: false }
    }

}


// aqui eu implemento os métodos reset (do meu iterator) e next (do iterator do ts)
// next retorna um iteratorResult