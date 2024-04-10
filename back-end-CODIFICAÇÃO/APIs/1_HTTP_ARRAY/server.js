import http from 'node:http'
const PORT = 3333
/**
 Métodos
** GET: pegar; POST: postar; PUT: modificar um todo; PATH: modificar uma parte do todo; DELETE: deletar;
 Requisição
1- corpo da requisição (request.body) (POST)
2- parâmetro de busca (search PARAMS, QUERY PARAMS) - http://localhost:3333/user/3 (GET)
3- parâmetros de rota (ROUTE PARAMS) - http://localhost:3333/user/1 (PUT, PATH, DELETE)
**/ 
const users = []
const server = http.createServer((request, response) => {
    const {method, url} = request
    if(url === '/users' && method === "GET"){ // buscar todos os usuários
        response.setHeader('Content-type', 'application/json')
        response.end(JSON.stringify(users)) // stringify = receber informações como JSON
    }else if(false){ // buscar um único usuário
    }else if(url === '/users' && method === "POST"){ // cadastrar um usuário
        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString() // chunk = pedaços da aplicação que seram juntados
        })
        request.on('end', () => {
            const newUser = JSON.parse(body)
            newUser.id = '1'
            users.push(newUser)
            response.writeHead(201, {'Content-type': 'application/json'})
            response.end(JSON.stringify(newUser))
        })
    }else if(true){ // atualizar um usuário
    }else if(true){ // deletar um usuário
    }else{ // recurso não encontrado
    }
})
server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})