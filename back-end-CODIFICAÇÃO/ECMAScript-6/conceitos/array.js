// criação de array
const array = []
const vetor = new Array()

console.log(typeof array) // object
console.log(typeof vetor) // object

// referência aos elementos de um array
const produtos = ["arroz", "feijão", "macarrao"]

console.log(produtos) // [ 'arroz', 'feijão', 'macarrao' ]
console.log(produtos[1]) // feijão
console.log(produtos[3]) // underfined

// inclusão de elementos de um array
const estados = ["Alagoas"]

estados.push('Recife') // final do array
console.log(estados) // [ 'Alagoas', 'Recife' ]

estados.unshift('Bahia') // inicio de array
console.log(estados) // [ 'Bahia', 'Alagoas', 'Recife' ]

// exclusão de elementos de um array
estados.pop() // final do array
console.log(estados) // [ 'Bahia', 'Alagoas' ]

estados.shift() // inicio do array
console.log(estados) // [ 'Alagoas' ]

// verificação de tamanho (quantidade de elementos) de um array
const numeros = [1,2,3,4,5,6,7,8,9]
console.log(`Tamanho do array: ${numeros.length}`) // Tamanho do array: 9

// apresentadar dados de um array
const cidades = ['Maceió', 'Rio Largo', 'Marechal']
console.log(`${cidades} \t ${cidades.toString()} \t ${cidades.join(' ::::: ')}`) // Maceió,Rio Largo,Marechal 	 Maceió,Rio Largo,Marechal 	 Maceió ::::: Rio Largo ::::: Marechal
