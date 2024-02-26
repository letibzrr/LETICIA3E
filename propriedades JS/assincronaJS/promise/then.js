const promessa = Promise.resolve(5 + 5) // resolve: resolver a promessa

console.log('Lógica que foi desenvolvida')

promessa.then(function(value){ //then: executada com sucesso
    console.log(`A soma 5 + 5 = ${value}`)
    return value
})
.then(function(value){
    console.log(`A subtração - 1 = ${value - 1}`)
    return value
}).then(function(value){
    console.log(`Multiplicação x 2 = ${value * 2}`)
    return value
}).then(function(value){
    console.log(`Divisão : 2 = ${value / 2}`)
    return value
})

console.log('Código Extra')

// Lógica que foi desenvolvida
// Código Extra
// A soma 5 + 5 = 10
// A subtração - 1 = 9
// Multiplicação x 2 = 20
// Divisão : 2 = 5