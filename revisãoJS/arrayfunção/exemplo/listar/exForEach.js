// callback, forEach 
const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
array.forEach((elemento, indice)=>{
    console.log(`${indice} - ${elemento}`) // função pronta; elemento [21, 6, 84, 24, 86, 11, 39, 59, 96, 53], indice [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
})
const listarDados = (elemento) => console.log(elemento) // função anônima; mesmo resultado 
array.forEach(listarDados)