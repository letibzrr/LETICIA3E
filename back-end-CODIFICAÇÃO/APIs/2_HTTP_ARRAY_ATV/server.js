import http from 'node:http'
const PORT = 3333

const participantes = []

const server = http.createServer((request, response) => {
    const {method, url} = request
    if(url === '/participantes' && method === "GET"){ // buscar todos os participantes
        response.setHeader('Content-type', 'application/json')
        response.end(JSON.stringify(participantes)) 
    }else if(url.startsWith('/participantes/') && method === 'GET'){ // selecionar um Único participante:
        const participanteId = url.split('/')[2] 
        const useparticipante = participantes.find((participante) => participante.id == participanteId) 
        if(useparticipante){
            response.setHeader("Content-Type", "application/json")
            response.end(JSON.stringify(useparticipante))
        }else{
            response.writeHead(404, {"Content-Type": "application/json"})
            response.end(JSON.stringify({ message: "Usuário não encontrado!" }))
        }
    }else if(url === '/participantes' && method === "POST"){ // cadastrar um usuário
        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString()
        })
        request.on('end', () => {
            const newparticipante = JSON.parse(body)
            newparticipante.id = participantes.length + 1
            if(newparticipante.idade < 16){
                response.writeHead(400, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ message: 'Idade mínima para cadastro é de 16 anos' }));
            }
            participantes.push(newparticipante)
            response.writeHead(201, {'Content-Type': 'application/json'})
            response.end(JSON.stringify(newparticipante))
        })
    }else if(url.startsWith('/participantes/') && method === 'PUT'){ // atualizar senha
        const participanteId = url.split('/')[2]
        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString() 
        })
        request.on('end', () => {
            response.writeHead(404, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({ message: "Erro ao atualizar as informações"}))
        })
        const participante = participantes.find((participante) => participante.id == participanteId) 
    }else{ // página não encontrada
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({ message: "Página não encontrada"}))
    }
})
server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})




