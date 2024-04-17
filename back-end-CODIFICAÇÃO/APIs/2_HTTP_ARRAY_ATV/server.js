import http from 'node:http'
const PORT = 3333

const participants = []

const server = http.createServer((request, response) => {
    const {method, url} = request
    if(url === '/participants' && method === "GET"){ // Rota para obter a lista de todos os participantes cadastrados.
        response.setHeader('Content-type', 'application/json')
        response.end(JSON.stringify(participants)) 
    }else if(url.startsWith('/participants/count') && method === "GET"){ // Rota para contar o número total de participantes cadastrados.
        const quantityParticipants = participants.length
        response.setHeader('Content-Type','application/json')
        response.end(JSON.stringify({'Quantily of Participants': quantityParticipants}))
    }else if(url.startsWith('/participants/count/over18') && method === "GET"){ // Rota para contar quantos participantes são maiores de 18 anos.
        const olderAge = participants.filter((participant) => participant.age >= 18)
        response.setHeader('Content-Type','application/json')
        response.end(JSON.stringify({'Quantily of Participants (with older age)': olderAge.length}))
    }else if(url.startsWith('/participants/city/most') && method === "GET"){ // Rota para identificar a cidade com o maior número de participantes.
        const countCity = participants.reduce((acc, participant) => {
            acc[participant.city] = (acc[participant.city] || 0) + 1
            return acc 
        }, {})
        let quantilyofParticipants = 0
        let cityMoreParticipants = ''
        Object.entries(countCity).forEach(([city, count]) => {
            if(count > quantilyofParticipants){
                quantilyofParticipants = count 
                cityMoreParticipants = city
            }
        })
        response.setHeader('Content-Type','application/json')
        response.end(JSON.stringify({'Quantily of all participants': quantilyofParticipants, 'City with more numbers of participatns': cityMoreParticipants,}))
    }else if(url.startsWith('/participants') && method === "GET"){ // Rota para obter os detalhes de um participante específico com base no seu ID.
        const participantID = url.split('/')[2]
        const findParticipant = participants.find((participant) => {
            return participant.id == participantID
        })
        if(!findParticipant){
            response.writeHead(403, {'Content-Type':'application/json'})
            return response.end(JSON.stringify({message: 'Participant not Found'}))
        }
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(findParticipant))
    }else if (url === '/participants' && method === "POST"){ // Rota para cadastrar um novo participante. 
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            const participant = JSON.parse(body)
            if(participant.age < 16){
                response.writeHead(403, {'Content-Type':'aplication/json'})
                return response.end(JSON.stringify({message: 'You not older enough, just users with 16 or more years'}))
            }else if(participant.password !== participant.confirmPassword){
                response.writeHead(400, {'Content-Type':'aplication/json'})
                return response.end(JSON.stringify({message: 'Wrong password, try again'}))
            }
            participant.id = participants.length + 1
            participants.push(participant)
            response.writeHead(201, {'Content-Type':'aplication/json'})
            response.end(JSON.stringify(participant))
        })
    }else if(url.startsWith('/participants') && method === "PUT"){ // Rota para atualizar as informações de um participante específico com base no seu ID.
        const participantID = url.split('/')[2]
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            const updateParticipant = JSON.parse(body)
            const index = participants.findIndex(participant => participant.id == participantID)
            if(index !== -1){
                participants[index] = {...participants[index], ...updateParticipant}
                response.setHeader('Content-TYpe','application/json')
                return response.end(JSON.stringify(participants[index]))
            }else{
                response.writeHead(404, {'Content-Type':'application/json'})
                return response.end(JSON.stringify({message: 'Participant not Found'}))
            }
        })
    }else if(url.startsWith('/participants') && method === "DELETE"){ // Rota para excluir um participante específico com base no seu ID.
        const participantID = url.split('/')[2]
        const index = participants.findIndex((participant) => participant.id == participantID)
            if(index !== -1){
                participants.splice(index, 1)
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({ message: 'Participant Deleted' }))
            }else{
                response.writeHead(404, {'Content-Type': 'application/json'})
                response.end(JSON.stringify({ message: 'Participant not Found' }))
            }
    }else{ // Rota de página não encontrada
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({codigo: 404, message: "Page not Found!"}))
    }
})
server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})
