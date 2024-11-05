import _ from 'lodash';

const array1 = [2, 3, 1, 1, 9, 4, 7, 9];

//Questao 3

console.log("Ordenando Array")
console.log(_.orderBy(array1))

console.log("Removendo duplicatas")
console.log(_.uniq(array1))

console.log("Filtrar Pares")
const array2 = _.filter(array1, n => n % 2 === 0);

console.log(array2)

console.log("Mapeando e retornando o dobro")
const array4 = _.map(array1, (x) => x * 2);

console.log(array4)

console.log("Soma de todos os elementos")

console.log(_.sum(array1))