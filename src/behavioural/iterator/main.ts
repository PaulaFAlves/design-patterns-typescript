import { MyDataStructure } from './myDataStructure'

const dataStructure = new MyDataStructure()
dataStructure.addItem('bourbon vermelho', 'catuaí', 'tupi')

console.log(dataStructure)

for (const data of dataStructure) {
    console.log(data)
}
