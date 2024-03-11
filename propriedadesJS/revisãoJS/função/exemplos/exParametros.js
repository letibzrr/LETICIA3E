const soma = function(x, y){
    return x +y
}
const resultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}
resultado(5,5) // 10 
resultado(5,5, soma) // 10
resultado(5,5, function(x, y){
    return x * y // 25 
})
resultado(3,3, (x,y)=>x/y) //1 