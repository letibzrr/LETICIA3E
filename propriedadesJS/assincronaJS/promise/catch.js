Promise.resolve('Olá, ' * 4)
.then((value)=>{
    if(Number.isNaN(value)){
        throw new Error("Valores inválidos") // Devolver o erro
        // Error: Valores inválidos
    } 
}).catch((err)=>{ // catch: executada com rejeição
    console.log(`Um erro ocorreu ${err}`)
    // Um erro ocorreu Error: Valores inválidos 
})
