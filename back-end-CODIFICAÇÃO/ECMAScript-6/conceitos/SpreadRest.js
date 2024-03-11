//SPREAD
const arrayOriginal = [1, 2, 3, 4];
const arrayFake = [...arrayOriginal]
console.log(arrayFake) // [ 1, 2, 3, 4 ]

const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]
const juntar = [...array1, ...array2]
console.log(juntar) // [1, 2, 3, 4, 5, 6, 7, 8]

const objOriginal = {nome: 'Carlos', idade: 23}
const objFake = {...objOriginal}
console.log(objFake) // { nome: 'Carlos', idade: 23 }

const novoObjeto = {...objOriginal, profissao: 'Developer'}
console.log(novoObjeto) // { nome: 'Carlos', idade: 23, profissao: 'Developer' }

//REST
function soma(...numeros){
    return numeros.reduce((total, numero) => total + numero, 0); // FUNÇÃO ACUMULADORA + ARROW FUNCTION
}
console.log(soma(1,2,3,4,5)) // 15
console.log(soma(10,20,30,40,50)) // 150