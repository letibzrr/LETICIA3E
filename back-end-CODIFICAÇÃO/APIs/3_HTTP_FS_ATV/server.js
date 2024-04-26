import http from 'node:http'
const PORT = 3333

const empregados = []

const server = http.createServer((request, response) => {
    const {method, url} = request
    if(url === '/empregados' && method === "GET"){ // listar todos os funcionários cadastrados
        response.setHeader('Content-type', 'application/json')
        response.end(JSON.stringify(empregados)) 
    }else if(url.startsWith('/empregados/count') && method === "GET"){ // contar o número total de funcionários cadastrados
        let numeroTotalEmpregados = empregados.length;
        response.writeHead(201, {'Content-Type':'aplication/json'})
        return response.end(JSON.stringify({message: 'Quantidade total de empregados', numeroTotalEmpregados}))
    }else if(url.startsWith('/empregados/porCargo/{cargo}') && method === "GET"){ // listar todos os funcionários de um determinado cargo
        // ???
    }else if(url.startsWith('/empregados/porHabilidade/{habilidade}') && method === "GET"){ // listar todos os funcionários que possuam uma determinada habilidade
        // ???
    }else if(url.startsWith('/empregados/porFaixaSalarial?min={min}&max={max}') && method === "GET"){ // listar todos os funcionários dentro de uma faixa salarial especificada
        // ???
    }else if(url.startsWith('/empregados/') && method === "GET"){ // detalhes de um funcionário específico com base em seu ID
        const empregadoID = url.split('/')[2]
        const findEmpregados = empregados.find((empregado) => {
            return empregado.id == empregadoID
        })
        if(!findEmpregados){
            response.writeHead(403, {'Content-Type':'application/json'})
            return response.end(JSON.stringify({message: 'empregado não encontrado'}))
        }
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(findEmpregados))
    }else if(url.startsWith('/empregados') && method === "POST"){ // cadastrar um novo funcionário
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            const empregado = JSON.parse(body)
            if(empregado.idade < 18){
                response.writeHead(403, {'Content-Type':'aplication/json'})
                return response.end(JSON.stringify({message: 'Sua idade não é permitida!'}))
            }else if(empregado.senha !== empregado.confirmaSenha){
                response.writeHead(400, {'Content-Type':'aplication/json'})
                return response.end(JSON.stringify({message: 'Senha incorreta!'}))
            }
            empregado.id = empregados.length + 1
            empregados.push(empregado)
            response.writeHead(201, {'Content-Type':'aplication/json'})
            response.end(JSON.stringify(empregado))
        })
    }else if(url.startsWith('/empregados/') && method === "PUT"){ // atualizar as informações de um funcionário específico com base em seu ID
        const empregadoID = url.split('/')[2]
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            const updateEmpregado = JSON.parse(body)
            const index = empregados.findIndex(empregado => empregado.id == empregadoID)
            if(index !== -1){
                empregados[index] = {...empregados[index], ...updateEmpregado}
                response.setHeader('Content-TYpe','application/json')
                return response.end(JSON.stringify(empregados[index]))
            }else{
                response.writeHead(404, {'Content-Type':'application/json'})
                return response.end(JSON.stringify({message: 'empregado não encontrado'}))
            }
        })
    }else if(url.startsWith('/empregados/') && method === "DELETE"){ // excluir um funcionário específico com base em seu ID
        const empregadoID = url.split('/')[2]
        const index = empregados.findIndex((empregado) => empregado.id == empregadoID)
            if(index !== -1){
                empregados.splice(index, 1)
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify({ message: 'empregado deletado' }))
            }else{
                response.writeHead(404, {'Content-Type': 'application/json'})
                response.end(JSON.stringify({ message: 'empregado não encontrado' }))
            }
    }else{ // rota de página não encontrada
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({codigo: 404, message: "página não encontrada!"}))
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})