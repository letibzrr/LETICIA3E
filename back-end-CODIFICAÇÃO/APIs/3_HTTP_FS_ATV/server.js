import http from 'node:http'
import fs from 'node:fs'

const PORT = 3333

const server = http.createServer((request, response) => {
    const {method, url} = request
    
    fs.readFile("empregados.json", 'utf8', (err, data) => {
        if(err){
            response.writeHead(500, {'Content-Type':'application/json'})
            response.end(JSON.stringify({message: 'Erro ao buscar os dados'}))
            return;
        }
        let jsonData = [];
        try{
            jsonData = JSON.parse(data)
        }catch(error){
            console.error('Erro ao ler o arquivo jsonData'+error)
        }
        if(url === '/empregados' && method === "GET"){ // listar todos os funcionários cadastrados
            fs.readFile('empregados.json', 'utf8', (err, data) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao buscar os dados'}))
                    return; 
                }
                const jsonData = JSON.parse(data)
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify(jsonData))
            })
        }else if(url === '/empregados/count' && method === "GET"){ // contar o número total de funcionários cadastrados
            fs.readFile('empregados.json', 'utf8', (err, data) => {
                if(err){
                    response.writeHead(500, {'Contet-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
                }
                const jsonData = JSON.parse(data)
                const totalEmpregados = jsonData.length

                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: `Total de empregados é ${totalEmpregados}`}))
            })
        }else if(url.startsWith('/empregados/porCargo/{cargo}') && method === "GET"){ // listar todos os funcionários de um determinado cargo
            console.log('GET /empregados/porCargo/{cargo}')
            response.end()
        }else if(url.startsWith('/empregados/porHabilidade/{habilidade}') && method === "GET"){ // listar todos os funcionários que possuam uma determinada habilidade
            console.log('GET /empregados/porHabilidade/{habilidade}')
            response.end()
        }else if(url.startsWith('/empregados/porFaixaSalarial?min={min}&max={max}') && method === "GET"){ // listar todos os funcionários dentro de uma faixa salarial especificada
            console.log('GET /empregados/porFaixaSalarial?min={min}&max={max}')
            response.end()
        }else if(url.startsWith('/empregados/') && method === "GET"){ // detalhes de um funcionário específico com base em seu ID
            const id = parseInt(url.split('/')[2])
            fs.readFile('empregados.json', 'utf8', (err) => {
                if(err){
                    response.writeHead(500, {'Contet-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
                }
                const jsonData = JSON.parse(data)
                const indexEmpregado = jsonData.findIndex((empregado) => empregado.id === id)

                if(indexEmpregado === -1){
                    response.writeHead(404, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Usuário não encontrado'}))
                    return
                }
                const empregadoEncontrado = jsonData[indexEmpregado]
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify(empregadoEncontrado))
            })
        }else if(url === '/empregados' && method === "POST"){ // cadastrar um novo funcionário
            let body = ''
            request.on('data', (chunk) => {
                body += chunk
            })
            request.on('end', () => {
                const novoEmpregado = JSON.parse(body)
                novoEmpregado.id = jsonData.length + 1
                jsonData.push(novoEmpregado)

                fs.writeFile("empregados.json", JSON.stringify(jsonData, null, 2), (err) => {
                    if(err){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                        return
                    }
                    response.writeHead(201, {'Content-Type':'application/json'})
                    response.end(JSON.stringify(novoEmpregado))
                })
        })
        }else if(url.startsWith('/empregados/') && method === "PUT"){ // atualizar as informações de um funcionário específico com base em seu ID
            console.log('PUT / empregados')
            response.end()
        }else if(url.startsWith('/empregados/') && method === "DELETE"){ // excluir um funcionário específico com base em seu ID
            console.log('DELETE / empregados')
            response.end()
        }else{ // rota de página não encontrada
            response.writeHead(404, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({codigo: 404, message: "Página não encontrada"}))
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})