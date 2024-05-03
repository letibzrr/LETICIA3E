import http from 'node:http';
import fs from 'node:fs';
import { URLSearchParams } from 'node:url';

const PORT = 3333;

//** Requisições => ( body -> JSON (POST) | ROUTE PARAM -> VALOR ENVIADO (PUT, DELETE, PATH, GET) | QUERY PARAM -> (?valorX=xx&valorY=yy) ) */

const server = http.createServer((request, response) => {
    const {method, url} = request
    // CORS
    response.setHeader('Access-Contro-Allow-Origin', "*")
    response.setHeader('Access-Contro-Allow-Methods', 'GET, POST, PUT, DELETE')
    response.setHeader('Access-Contro-Allow-Headers', 'Content-Type')

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
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
                }
                const jsonData = JSON.parse(data)
                const totalEmpregados = jsonData.length

                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: `Total de empregados é ${totalEmpregados}`}))
            })
        }else if(url.startsWith('/empregados/porCargo/') && method === "GET"){ // listar todos os funcionários de um determinado cargo
            const cargo = url.split('/')[3]
            fs.readFile('empregados.json', 'utf8', (err, data) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
                }
                const jsonData = JSON.parse(data)
                const empregadosPorCargo = jsonData.filter((empregados) => empregados.cargo === cargo)

                if(empregadosPorCargo.length === 0){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'empregado não encontrado'}))
                    return
                }
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify(empregadosPorCargo))
            })
        }else if(url.startsWith('/empregados/porHabilidade/') && method === "GET"){ // listar todos os funcionários que possuam uma determinada habilidade
            const habilidade = url.split('/')[3]
            fs.readFile('empregados.json', 'utf8', (err, data) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
                }
                const jsonData = JSON.parse(data)
                const empregadosPorHabilidade = jsonData.filter((empregados) => empregados.habilidades.includes(habilidade))

                if(empregadosPorHabilidade.length === 0){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'empregado não encontrado'}))
                    return
                }
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify(empregadosPorHabilidade))
            })
        }else if(url.startsWith('/empregados/porFaixaSalarial') && method === "GET"){ // listar todos os funcionários dentro de uma faixa salarial especificada
           const urlParams = new URLSearchParams(url.split('?')[1])
           const minSalario = urlParams.get('minSalario') 
           const maxSalario = urlParams.get('maxSalario')

           fs.readFile('empregados.json', 'utf8', (err, data) => {
            if(err){
                response.writeHead(500, { 'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
            }
            const jsonData = JSON.parse(data)
            const empregadosPorFaixaSalarial = jsonData.filter((empregados) => empregados.salario >= minSalario && empregados.salario <= maxSalario)

            if(empregadosPorFaixaSalarial.length === 0){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'empregado não encontrado'}))
                return
            }

            response.writeHead(200, {'Content-Type':'application/json'})
            response.end(JSON.stringify(empregadosPorFaixaSalarial))
           })
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
            const id = parseInt(url.split('/')[2])
            let body = ''
            request.on('data', (chunk) => {
                body += chunk
            })
            request.on('end', () => {
                fs.readFile('empregados.json', 'utf8', (err, data) => {
                    if(err){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                        return
                    }
                    const jsonData = JSON.parse(data)
                    const indexEmpregado = jsonData.findIndex((empregado) => empregado.id === id)

                    if(indexEmpregado === -1){
                        response.writeHead(404, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'empregado não encontrado'}))
                    }
                    const empregadoAtualizado = JSON.parse(body)
                    empregadoAtualizado.id = id
                    jsonData[indexEmpregado] = empregadoAtualizado

                    fs.writeFile('empregados.json', JSON.stringify(jsonData, null, 2), (err) => {
                        if(err){
                            response.writeHead(500, {'Content-Type':'application/json'})
                            response.end(JSON.stringify({message: 'Erro ao salvar os dados'}))
                            return
                        }
                        response.writeHead(200, {'Content-Type':'application/json'})
                        response.end(JSON.stringify(empregadoAtualizado))
                    })
                })
            })
        }else if(url.startsWith('/empregados/') && method === "DELETE"){ // excluir um funcionário específico com base em seu ID
            const id = url.split('/')[2]
            fs.readFile('empregados.json', 'utf8', (err, data) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                }
                const jsonData = JSON.parse(data)
                const indexEmpregado = jsonData.findIndex((empregados) => empregados.id === id)

                if(indexEmpregado === -1){
                    response.writeHead(404, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'empregado não encontrado'}))
                    return;
                }
                jsonData.splice(indexEmpregado, 1)
                fs.writeFile('empregados.json', JSON.stringify(jsonData, null, 2), (err) => {
                    if(err){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro ao salvar os dados'}))
                        return
                    }
                    response.writeHead(200, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'empregado excluido'}))
                })
                })
                // deu erro ao deletar aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        }else{ // rota de página não encontrada
            response.writeHead(404, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({codigo: 404, message: "Página não encontrada"}))
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})