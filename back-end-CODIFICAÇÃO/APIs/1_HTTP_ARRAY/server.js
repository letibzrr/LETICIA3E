import http from 'node:http'
const PORT = 3333
/**
 Métodos
** GET: pegar; POST: postar; PUT: modificar um todo; PATH: modificar uma parte do todo; DELETE: deletar;
 Requisição
1- corpo da requisição (request.body) (POST)
2- parâmetro de busca (search PARAMS, QUERY PARAMS) - http://localhost:3333/user/3 (GET)
3- parâmetros de rota (ROUTE PARAMS) - http://localhost:3333/user/1 (PUT, PATH, DELETE)
==> PROTOCOLO (http) ==> DOMINIO (localhost) ==> PORTA (3333) ==> ENDPOINT (ex: user)
**/ 
const users = []
const server = http.createServer((request, response) => {
    const {method, url} = request
    if(url === '/users' && method === "GET"){ // buscar todos os usuários
        response.setHeader('Content-type', 'application/json')
        response.end(JSON.stringify(users)) // stringify = receber informações como JSON
    }else if(url.startsWith('/users/') && method === 'GET'){ // buscar um único usuário
        // startsWith = validação de todos os dados
        const userId = url.split('/')[2] // split = manipulação de dados por pedaços
        const user = users.find((user) => user.id == userId) // encontrar atraves do 'find'
        if(user){
            response.setHeader("Content-Type", "application/json")
            response.end(JSON.stringify(user))
        }else{
            response.writeHead(404, {"Content-Type": "application/json"})
            response.end(JSON.stringify({ message: "Usuário não encontrado!" }))
        }
    }else if(url === '/users' && method === "POST"){ // cadastrar um usuário
        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString() // chunk = pedaços da aplicação que seram juntados
        })
        request.on('end', () => {
            const newUser = JSON.parse(body)
            newUser.id = users.length + 1
            users.push(newUser)
            response.writeHead(201, {'Content-Type': 'application/json'})
            response.end(JSON.stringify(newUser))
        })
    }else if(url.startsWith('/users/') && method === 'PUT'){ // atualizar um usuário
        const userId = url.split('/')[2]
        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString() 
        })
        request.on('end', () => {
            const uptadeUser = JSON.parse(body)
            const index = users.findIndex((user) => user.id == userId)
            if(index !== -1){
                users[index] = {...users[index], uptadeUser} // reatribuição e junção 
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify(user[index]))
            }else{
                response.writeHead(404, {'Content-Type': 'application/json'})
                response.end(JSON.stringify({ message: "Erro ao atualizar as informações"}))
            }
        })
        const user = users.find((user) => user.id == userId) 
    }else if(url.startsWith('/users/') && method === 'DELETE'){ // deletar um usuário
        const userId = url.split('/')[2]
        const index = users.findIndex((user) => user.id == userId)
            if(index !== -1){
                users.splice(index, 1)
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({ message: "Usuário excluido" }))
            }else{
                response.writeHead(404, {'Content-Type': 'application/json'})
                response.end(JSON.stringify({ message: "Erro ao tentar excluir usuário" }))
            }
    }else{ // recurso não encontrado
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({ message: "Página não encontrada"}))
    }
})
server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})