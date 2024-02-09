function checkNumber(num){
    return new Promise((resolve, reject)=>{
    if(num > 20){
        resolve('O número é maior que  20')
    }else{
        reject(new Error('Número Inválido'))
    }    
    })
}
const num1 = checkNumber(25)
const num2 = checkNumber(10)

num1.then((value)=>{
    console.log(`O resultado é: ${value}`)
}).catch((err)=>{
    console.log(`Error: ${err}`)
})

num2.then((value)=>{
    console.log(`O resultado é: ${value}`)
}).catch((err)=>{
    console.log(`Error: ${err}`)
})

console.log('Teste Async')

// Teste Async
// O resultado é: O número é maior que  20
// Error: Error: Número Inválido