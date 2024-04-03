const minimist = require('minimist')

const args  = minimist(process.argv.slice(2))
console.log(args) // { _: [], nome: 'Lua', idade: 17 }

const nome = args["nome"]
const idade = args["idade"]
console.log(`Nome ${nome}, idade ${idade} anos`) // Nome Lua, idade 17 anos
