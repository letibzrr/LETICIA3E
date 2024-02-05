// callback, map
const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
array.map((elemento)=>{
    console.log(elemento * 3) // listar e modificar o array principal [63, 18, 252, 72, 258, 33, 117, 177, 288, 159]
})
const listarMap = elemento => console.log(elemento)
array1.map(listarMap) // função anônima