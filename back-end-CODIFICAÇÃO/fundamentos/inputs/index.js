const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Diz teu name Zé: ', (name)=>{
    console.log(`O name do Zé é: ${name}`)
    readline.close()
})