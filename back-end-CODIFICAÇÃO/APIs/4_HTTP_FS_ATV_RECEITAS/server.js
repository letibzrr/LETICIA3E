import { createServer } from "node:http";
import fs from "node:fs";
import { URLSearchParams } from 'node:url';
import lerDadosReceitas from "./readReceitas.js";

const PORT = 3333 

const server = createServer((request, response) => {
    const {method, url} = request
    // CRUD => C - Create, R - Release, U - Update, D - Delete
    // REQUISIÇÕES => ( body -> JSON (POST) | ROUTE PARAM -> VALOR ENVIADO (PUT, DELETE, PATH, GET) | QUERY PARAM -> (?valorX=xx&valorY=yy) ) 

    response.setHeader('Access-Contro-Allow-Origin', "*")
    response.setHeader('Access-Contro-Allow-Methods', 'GET, POST, PUT, DELETE')
    response.setHeader('Access-Contro-Allow-Headers', 'Content-Type')

    if(url === ('/receitas') && method === 'GET'){ // LISTA DE TODAS AS RECEITAS
        lerDadosReceitas((err, receitas) => {
            if(err){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro ao ler os dados'}))
                return;
            }
            response.writeHead(200, {'Content-Type':'application/json'})
            response.end(JSON.stringify(receitas))
        })
    }else if(url.startsWith('/receitas/') && method === 'GET'){ // DETALHES DE UMA RECEITA PELO ID
        const id = parseInt(url.split('/')[2])
        lerDadosReceitas((err, receitas) => {
            if(err){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                return; // função => parar a execução
            }
            const indexReceita = receitas.findIndex((receita) => receita.id === id)
            if(indexReceita === -1){
                response.writeHead(404, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'receita não encontrada'}))
                return;
            }
            const receitaEncontrada = receitas[indexReceita]
            response.writeHead(200, {'Content-Type':'application/json'})
            response.end(JSON.stringify(receitaEncontrada))
        })
    }else if(url.startsWith('/categorias') && method === 'GET'){ // RECEITA POR CATEGORIA
        lerDadosReceitas((err, receitas) => {
            if (err) {
                response.writeHead(500, {'Content-Type': 'application/json'});
                response.end(JSON.stringify({message: 'Erro ao ler dados das receitas'}));
                return;
            }
            const categorias = receitas.map(receita => receita.categoria);
            const receitasCategoria = [...new Set(categorias)];
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(receitasCategoria));
        });
    }else if(url.startsWith('/busca') && method === 'GET'){ // BUSCAR POR ALGO NA RECEITA
        const urlParam = new URLSearchParams(url.split('?')[1])
        const termo = urlParam.get('termo')
        lerDadosReceitas((err, receitas) => {
            if(err){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                return; // função => parar a execução
            }
            const resultadoBusca = receitas.filter((receita) =>
            receita.nome.includes(termo) ||
            receita.categoria.includes(termo) ||
            receita.ingredientes.some((ingrediente) => ingrediente.includes(termo)))

            if(resultadoBusca.length === 0){
                response.writeHead(404, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'receita não encontrada com o termo inserido'}))
                return;
            }
            response.writeHead(200, {'Content-Type':'application/json'})
            response.end(JSON.stringify(resultadoBusca))
            return;
        })
    }else if(url.startsWith('/ingredientes') && method === 'GET'){ // LISTA DE RECEITA COM O INGREDIENTE
        // falta fazer
    }else if(url === '/receitas' && method === 'POST'){ // CADASTRAR UMA RECEITA
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
    }else if(url.startsWith('/receitas/') && method === 'PUT'){ // ATUALIZAR UMA RECEITA PELO ID
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
    }else if(url.startsWith ('/receitas/') && method === 'DELETE'){ // DELETAR UMA RECEITA PELO ID
        const id = parseInt(url.split('/')[2])
        lerDadosReceitas((err, receitas) => {
            if(err){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                return; // função => parar a execução
            }
            const indexReceita = receitas.findIndex((receita) => receitas.id === id)
            if(indexReceita === 1){
                response.writeHead(404, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'receita não encontrada'}))
                return;
            }
            receitas.splice(indexReceita, 1)
            fs.writeFile('receitas.json', JSON.stringify(receitas, null, 2), (err) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao salvar os dados'}))
                    return
                }
                response.writeHead(201, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'receita deletada'}))
            })
        })
    }else{ // ROTA NÃO ENCONTRADA
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({codigo: 404, message: "Página não encontrada"}))
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})

