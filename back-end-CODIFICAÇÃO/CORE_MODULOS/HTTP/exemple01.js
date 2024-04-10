const http = require('node:http')
const PORT = 3333 || 4444

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plan'})
    response.write('Hallo, World')
    response.end()
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})