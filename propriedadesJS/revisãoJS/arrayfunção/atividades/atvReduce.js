const numeros = [1, 2, 3, 4, 5]
const soma = numeros.reduce((total, atual)=> {
    return total + atual ;
}) 
console.log(soma)