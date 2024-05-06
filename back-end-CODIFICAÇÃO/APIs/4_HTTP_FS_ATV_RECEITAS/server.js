import http from 'node:http';
import fs from 'node:fs';
import { URLSearchParams } from 'node:url';

const PORT = 3333

const server = http.createServer((request, response) => {
    const {method, url} = request

    response.setHeader('Access-Contro-Allow-Origin', "*")
    response.setHeader('Access-Contro-Allow-Methods', 'GET, POST, PUT, DELETE')
    response.setHeader('Access-Contro-Allow-Headers', 'Content-Type')

    fs.readFile("receitas.json", "utf8", (err, data) => {
        if(err){
            response.writeHead(500, {'Content-Type':'application/json'})
            response.end(JSON.stringify({message: 'Erro ao buscar os dados'}))
            return;
        }
        let jsonData = []
        try{
            jsonData = JSON.parse(data)
        }catch(error){
            console.error('Erro ao ler o arquivo jsonData'+error)
        }
        if(url === ('/receitas') && method === 'GET'){ // todas as receitas
            fs.readFile('receitas.json', 'utf8', (err, data) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao buscar os dados'}))
                    return; 
                }
                const jsonData = JSON.parse(data)
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify(jsonData))
            })
        }else if(url.startsWith('/receitas/') && method === 'GET'){ // detalhes de uma receita com base em seu ID
            const id = parseInt(url.split('/')[2])
            fs.readFile('receitas.json', 'utf8', (err) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
                }
                const jsonData = JSON.parse(data)
                const indexReceita = jsonData.findIndex((receita) => receita.id === id)

                if(indexReceita === -1){
                    response.writeHead(404, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Receita não encontrada'}))
                    return
                }
                const receitaEncontrada = jsonData[indexReceita]
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify(receitaEncontrada))
            })
        }else if(url.startsWith('/receitas/categoria/') && method === 'GET'){ // todas as categorias de receitas disponíveis
            // falta consertar
            const categoria = url.split('/')[3]
            fs.readFile('receitas.json', 'utf8', (err, data) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
                } 
                const jsonData = JSON.parse(data)
                const receitaCategoria = jsonData.filter((receita) => receita.categoria === categoria)

                if(receitaCategoria.length === 0){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'receita não encontrada'}))
                    return
                }
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify(receitaCategoria))
            })
        }else if(url === '/receitas/buscar' && method === 'GET'){ // busca por receitas
            // falta fazer
        }else if(url === '/receitas/ingredientes'){ // todos os ingredientes
            // falta consertar
            const ingredientes = url.split('/')[2]
            fs.readFile('receitas.json', 'utf8', (err, data) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
                } 
                const jsonData = JSON.parse(data)
                const receitaIngredientes = jsonData.filter((receita) => receita.ingredientes === ingredientes)

                if(receitaIngredientes.length === 0){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'receita não encontrada'}))
                    return
                }
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(JSON.stringify(receitaIngredientes))
            })
        }else if(url === '/receitas' && method === 'POST'){ // adicionar uma nova receita
            let body = ''
            request.on('data', (chunk) => {
                body += chunk
            })
            request.on('end', () => {
                const novaReceita = JSON.parse(body)
                novaReceita.id = jsonData.length + 1
                jsonData.push(novaReceita)

                fs.writeFile("receitas.json", JSON.stringify(jsonData, null, 2), (err) => {
                    if(err){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                        return
                    }
                    response.writeHead(201, {'Content-Type':'application/json'})
                    response.end(JSON.stringify(novaReceita))
                })
            })
        }else if(url.startsWith('/receitas/') && method === 'PUT'){ // detalhes de uma receita com base em seu ID.
            const id = parseInt(url.split('/')[2])
            let body = ''
            request.on('data', (chunk) => {
                body += chunk
            })
            request.on('end', () => {
                fs.readFile('receitas.json', 'utf8', (err, data) => {
                    if(err){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                        return
                    }
                    const jsonData = JSON.parse(data)
                    const indexReceita = jsonData.findIndex((receita) => receita.id === id)

                    if(indexReceita === -1){
                        response.writeHead(404, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'receita não encontrada'}))
                    }
                    const receitaAtualizada = JSON.parse(body)
                    receitaAtualizada.id = id
                    jsonData[indexReceita] = receitaAtualizada

                    fs.writeFile('receitas.json', JSON.stringify(jsonData, null, 2), (err) => {
                        if(err){
                            response.writeHead(500, {'Content-Type':'application/json'})
                            response.end(JSON.stringify({message: 'Erro ao salvar os dados'}))
                            return
                        }
                        response.writeHead(200, {'Content-Type':'application/json'})
                        response.end(JSON.stringify(receitaAtualizada))
                    })
                })
            })
        }else if(url.startsWith ('/receitas/') && method === 'DELETE'){ // excluir uma receita com base em seu ID.
            const id = url.split('/')[2]
            fs.readFile('receitas.json', 'utf8', (err, data) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                }
                const jsonData = JSON.parse(data)
                const indexReceita = jsonData.findIndex((receita) => receita.id === id)

                if(indexReceita === 1){
                    response.writeHead(404, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'receita não encontrada'}))
                    return;
                }
                jsonData.splice(indexReceita, 1)
                fs.writeFile('receitas.json', JSON.stringify(jsonData, null, 2), (err) => {
                    if(err){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro ao salvar os dados'}))
                        return
                    }
                    response.writeHead(201, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'receita deletada'}))
                })
            })
        }else{ // rota de página não encontrada
            response.writeHead(404, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({codigo: 404, message: "Página não encontrada"}))
        }
    })
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})