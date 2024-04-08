// modulo externo
const minimist = require("minimist");
// modulo interno
const soma = require('./soma').soma
// logica
const args = minimist(process.argv.splice(2))
const a = args["numero1"]
const b = args["numero2"]
// node server.js --numero1=10 --numero2=20
console.log(`A soma de ${a} + ${b} = ${soma(a,b)}`) // A soma de 10 + 20 = 30