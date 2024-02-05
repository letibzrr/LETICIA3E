// callback, filter
const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]
const maiorTrintaUm = array.filter((elemento)=>{
    return elemento > 31
})
console.log(maiorTrintaUm) // todos os valores que atende o requisito; [84, 86, 39, 59, 96, 53]