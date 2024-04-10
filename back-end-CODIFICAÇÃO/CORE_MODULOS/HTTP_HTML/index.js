const http = require('node:http')
const PORT = 3333

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type':'text/html'})
        response.write('<meta charset=utf8>')
        response.write('<h1>Home Page</h1>')
        response.write('<p>Welcome to Home Page</p>')
        response.end()
    }else if(request.url === '/sobre'){
        response.write('<meta charset=utf8>')
        response.writeHead(200, {'Content-Type':'text/html'})
        response.write('<h1>About Page</h1>')
        response.write('<p>Welcome to About Page</p>')
        response.end()
    }else{
        response.writeHead(404, {'Content-Type':'text/html'})
        response.write('<h1>Page not found</h1>')
        response.end()
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on ${PORT}`)
})