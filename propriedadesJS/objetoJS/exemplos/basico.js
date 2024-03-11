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
console.log(pessoa) // {nome: 'Lua', idade: 17}
console.log(pessoa.name) // Lua
console.log(pessoa.saudacao()) // Hello, World
console.log(pessoa.adress[0].street) // Rua A
