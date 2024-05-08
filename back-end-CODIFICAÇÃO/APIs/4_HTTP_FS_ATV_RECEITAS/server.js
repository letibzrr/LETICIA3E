import { createServer } from "node:http";
import fs from "node:fs";
import { URLSearchParams } from "node:url";
import lerDadosReceitas from "./readReceitas.js";

const PORT = 3333 

const server = createServer((request, response) => {
    const {method, url} = request

    // CRUD => C - Create, R - Release, U - Update, D - Delete
    if(url === ('/receitas') && method === 'GET'){ // todas as receitas
        lerDadosReceitas((err, receitas) => {
            if(err){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro ao ler os dados'}))
                return;
            }
            response.writeHead(200, {'Content-Type':'application/json'})
            response.end(JSON.stringify(receitas))
        })
    }else if(url.startsWith('/receitas/') && method === 'GET'){ // detalhes de uma receita com base em seu ID
        // const id = parseInt(url.split('/')[2])
        // fs.readFile('receitas.json', 'utf8', (err) => {
        //     if(err){
        //         response.writeHead(500, {'Content-Type':'application/json'})
        //         response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
        //     }
        //     const jsonData = JSON.parse(data)
        //     const indexReceita = jsonData.findIndex((receita) => receita.id === id)

        //     if(indexReceita === -1){
        //         response.writeHead(404, {'Content-Type':'application/json'})
        //         response.end(JSON.stringify({message: 'Receita não encontrada'}))
        //         return
        //     }
        //     const receitaEncontrada = jsonData[indexReceita]
        //     response.writeHead(200, {'Content-Type':'application/json'})
        //     response.end(JSON.stringify(receitaEncontrada))
        // })
    }else if(url.startsWith('/categorias') && method === 'GET'){ // todas as categorias de receitas disponíveis
        // falta fazer
    }else if(url.startsWith('/busca') && method === 'GET'){ // busca por receitas
        // falta fazer
    }else if(url.startsWith('/ingredientes') && method === 'GET'){ // todos os ingredientes
        // falta fazer
    }else if(url === '/receitas' && method === 'POST'){ // adicionar uma nova receita
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            if(!body){
                response.writeHead(400, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Corpo da solicitação vazio'}))
                return
            }
            const novaReceita = JSON.parse(body)
            lerDadosReceitas((err, receitas) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler dados da receita'}))
                    return;
                }
                novaReceita.id = receitas.length + 1
                receitas.push(novaReceita)

                fs.writeFile('receitas.json', JSON.stringify(receitas, null, 2), (err) => {
                    if(err){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro ao cadastrar a receita no arquivo'}))
                        return; 
                    }
                })
                response.writeHead(201, {'Content-Type':'application/json'})
                response.end(JSON.stringify(novaReceita))
            })
        })
    }else if(url.startsWith('/receitas/') && method === 'PUT'){ // atualizar uma receita com base em seu ID
        const id = parseInt(url.split('/')[2])
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            if(!body){
                response.writeHead(400, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Corpo da solicitação vazio'}))
                return
            }
            lerDadosReceitas((err, receitas) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler dados da receita'}))
                    return;
                }
                const indexReceita = receitas.findIndex((receita) => receita.id === id)
                if(indexReceita === -1){
                    response.writeHead(404, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Receita não encontrada'}))
                    return
                }

                const receitaAtualizada = JSON.parse(body)
                receitaAtualizada.id = id
                receitas[indexReceita] = receitaAtualizada

                fs.writeFile('receitas.json', JSON.stringify(receitas, null, 2), (err) => {
                    if(err){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro ao salvar os dados'}))
                        return
                    }
                    response.writeHead(201, {'Content-Type':'application/json'})
                    response.end(JSON.stringify(receitaAtualizada))
                })
            })
        })
    }else if(url.startsWith ('/receitas/') && method === 'DELETE'){ // excluir uma receita com base em seu ID
        // const id = url.split('/')[2]
        // fs.readFile('receitas.json', 'utf8', (err, data) => {
        //     if(err){
        //         response.writeHead(500, {'Content-Type':'application/json'})
        //         response.end(JSON.stringify({message: 'Erro interno no servidor'}))
        //     }
        //     const jsonData = JSON.parse(data)
        //     const indexReceita = jsonData.findIndex((receita) => receita.id === id)

        //     if(indexReceita === 1){
        //         response.writeHead(404, {'Content-Type':'application/json'})
        //         response.end(JSON.stringify({message: 'receita não encontrada'}))
        //         return;
        //     }
        //     jsonData.splice(indexReceita, 1)
        //     fs.writeFile('receitas.json', JSON.stringify(jsonData, null, 2), (err) => {
        //         if(err){
        //             response.writeHead(500, {'Content-Type':'application/json'})
        //             response.end(JSON.stringify({message: 'Erro ao salvar os dados'}))
        //             return
        //         }
        //         response.writeHead(201, {'Content-Type':'application/json'})
        //         response.end(JSON.stringify({message: 'receita deletada'}))
        //     })
        // })
    }else{ // rota de página não encontrada
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({codigo: 404, message: "Página não encontrada"}))
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})

