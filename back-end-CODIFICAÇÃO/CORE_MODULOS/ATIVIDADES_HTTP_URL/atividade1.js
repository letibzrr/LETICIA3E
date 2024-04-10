const http = require('node:http')
const PORT = 3333

const server = http.createServer((request, response) => {
    if(request.url === '/home'){
        response.writeHead(200, {'Content-Type':'text/html'})
        response.write('<meta charset=utf8>')
        response.write('<h1>Bem-vindo à página inicial!</h1>')
        response.end()
    }else if(request.url === '/about'){
        response.writeHead(200, {'Content-Type':'text/html'})
        response.write('<meta charset=utf8>')
        response.write('<h1>Sobre nós: somos uma empresa dedicada a..</h1>')
        response.end()
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on ${PORT}`)
})