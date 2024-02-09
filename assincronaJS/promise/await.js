function respostaDelay(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Resolveu a promessa')
        }, 5000)
    })
}
async function chamadaDelay(){
    console.log('Chamando a promisse, e esperando o resultado')
    const resultado = await respostaDelay() // await: espera do resultado
    console.log(`O resultado chegou ${resultado}`)
}
chamadaDelay()

// Chamando a promisse, e esperando o resultado
// O resultado chegou Resolveu a promessa
