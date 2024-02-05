let pessoa = {
    name: 'Lua', 
    age: 17,
    adress: [
        {
            type: 'Residencial',
            street: 'Rua A',
            city: "Maceió"
        },
        {
            type: 'Comercial',
            street: 'Rua B',
            city: 'Salvador'
        }
    ],
    saudacao(){
        return `Hello, World`
    }
}
pessoa.adress.forEach((elemento, indice)=>{
    console.log(`${indice + 1} - ${elemento.type}`)
    console.log(`${indice + 1} - ${elemento.street}`)
    console.log(`${indice + 1} - ${elemento.city}`)
})