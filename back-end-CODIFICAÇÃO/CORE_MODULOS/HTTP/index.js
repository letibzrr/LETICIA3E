const http = require('node:http')
// console.log(http) // saida: metodos e status code 

const server = http.createServer((request, response) => { // requisição e resposta
    response.write('Hallo, my first server HTTP!')
    response.end()
})
server.listen(3333, () => {
    console.log('Servidor on PORT: 3333')
}) // se travar no console = funcionou
// navegador = localhost:3333
