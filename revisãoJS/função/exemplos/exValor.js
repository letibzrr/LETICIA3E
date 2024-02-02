//ex 01
function soma(a, b){
    const soma = a + b
    if(soma > 5){
        console.log(`valor não permitido ${soma}`)
    }else{
        return soma
    }
}
console.log(soma(2,2)) //4 (2+2)
console.log(soma(2)) // NaN (2+b, b sem valor)
console.log(soma()) // NaN (a+b, ambos estão sem valor)
console.log(soma(2,2,2,2,2,2,2,2)) // 4 (2+2, coleta de apenas os dois primeiros dados)
console.log(soma(2,5)) // 7 (undefined e console.log "valor não permitido")
