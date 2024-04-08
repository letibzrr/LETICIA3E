console.log(process.argv) // node index.js nome=Lua age=17
// [
//  'C:\\Program Files\\nodejs\\node.exe',
//  'C:\\Users\\3°E\\Documents\\LETICIA3E\\back-end-CODIFICAÇÃO\\modulo-externo\\fundamentos\\ler_argumento_terminal\\index.js',
//  'nome=Lua',
//  'age=17'
//]
const args = process.argv.slice(2)
console.log(args) // [ 'nome=Lua', 'age=17' ]

const nome = args[0].split('=')[1] 
console.log(nome) // Lua

const age = args[1].split('=')[1] 
console.log(age) // 17

 