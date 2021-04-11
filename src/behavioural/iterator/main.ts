import { MyDataStructure } from './myDataStructure'

const dataStructure = new MyDataStructure()
dataStructure.addItem('A', 'B', 'C')
console.log(dataStructure)

const [a, b] = dataStructure
console.log(a, b)

for (const data of dataStructure) {
    console.log(data)
}