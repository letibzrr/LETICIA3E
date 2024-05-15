import { createServer } from "node:http";
import fs from "node:fs";
import lerDadosUsuarios from "./readUsuarios.js";

const PORT = 3333 

const server = createServer((request, response) => {
    const {method, url} = request

    if(url === ('/usuarios') && method === 'GET'){ // visualizar todos os usuários
        // listagem de usuários
        lerDadosUsuarios((err, usuarios) => {
            if(err){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro ao ler os dados'}))       
            }
            response.writeHead(200, {'Content-Type':'application/json'})
            response.end(JSON.stringify(usuarios))
        })
    }else if(url.startsWith('/perfil/') && method === 'GET'){ // visualizar o perfil de um usuário específico
        const id = parseInt(url.split('/')[2])
        lerDadosUsuarios((err, usuarios) => {
            if(err){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro interno no servidor'}))
                return; 
            }
            const indexUsuario = usuarios.findIndex((usuario) => usuario.id === id) // encontrar usuario especifico atraves do id
            if(indexUsuario === -1){ // retorno negativo
                response.writeHead(404, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'usuario não encontrado'}))
                return;
            }
            const usuarioEncontrado = usuarios[indexUsuario] // retorno positivo
            response.writeHead(200, {'Content-Type':'application/json'})
            response.end(JSON.stringify(usuarioEncontrado))
        })
    }else if(url.startsWith('/perfil/') && method === 'PUT'){ // atualizar o perfil do usuário
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
            lerDadosUsuarios((err, usuarios) => {
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'Erro ao ler dados da receita'}))
                    return;
                }

                const indexUsuario = usuarios.findIndex((usuario) => usuario.id === id) // encontrar usuario especifico atraves do id
                if(indexUsuario === -1){
                    response.writeHead(404, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message: 'usuario não encontrado'})) // retorno negativo
                    return
                }
                const usuarioAtualizado = JSON.parse(body)
                usuarioAtualizado.id = id
                usuarios[indexUsuario] = usuarioAtualizado

                fs.writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => {
                    if(err){
                        response.writeHead(500, {'Content-Type':'application/json'})
                        response.end(JSON.stringify({message: 'Erro ao salvar os dados'}))
                        return
                    }
                    response.writeHead(201, {'Content-Type':'application/json'})
                    response.end(JSON.stringify(usuarioAtualizado)) // retorno positivo
                })
            })
        })
    }else if(url.startsWith('/usuarios') && method === 'POST'){ // cadastrar na rede social
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            if (!body) {
                response.writeHead(400, { 'Content-Type' : 'application/json' })
                response.end(JSON.stringify({ message: 'Corpo da solicitação vazio' }))
                return
            }
            const novoUsuario = JSON.parse(body)
            lerDadosUsuarios((err, usuarios) => { 
                if (err) {
                    response.writeHead(500, { 'Content-Type' : 'application/json' })
                    response.end(JSON.stringify({ message: 'Erro ao ler dados do usuário' }))
                    return;
                }
                const usuarioExistente = usuarios.find(usuario => usuario.email === novoUsuario.email) // validação de email
                if (usuarioExistente) {
                    response.writeHead(400, { 'Content-Type': 'application/json' })
                    response.end(JSON.stringify({ message: 'Este email já está cadastrado' }))
                    return
                }
                novoUsuario.id = usuarios.length + 1
                usuarios.push(novoUsuario)
        
                fs.writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => { 
                    if (err) {
                        response.writeHead(500, { 'Content-Type' : 'application/json' })
                        response.end(JSON.stringify({ message: 'Erro ao cadastrar o usuário no arquivo' }))
                        return;
                    }
                    response.writeHead(201, { 'Content-Type' : 'application/json' })
                    response.end(JSON.stringify(novoUsuario))
                })
            })
        })           
    }else if(url.startsWith('/login') && method === 'POST'){ // login na rede social
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            if (!body) {
                response.writeHead(400, { 'Content-Type' : 'application/json' })
                response.end(JSON.stringify({ message: 'Corpo da solicitação vazio' }))
                return
            }
            const loginUsuario = JSON.parse(body)
            lerDadosUsuarios((err, usuarios) => { 
                if (err) {
                    response.writeHead(500, { 'Content-Type' : 'application/json' })
                    response.end(JSON.stringify({ message: 'Erro ao ler dados do usuário' }))
                    return;
                }
                const loginEmailSenha = usuarios.find(usuario => usuario.email === loginUsuario.email && usuario.senha === loginUsuario.senha) // validação de email e senha
                if (loginEmailSenha) {
                    response.writeHead(201, { 'Content-Type': 'application/json' })
                    response.end(JSON.stringify(loginUsuario))
                    return
                }else if (!loginEmailSenha) {
                    response.writeHead(400, { 'Content-Type': 'application/json' })
                    response.end(JSON.stringify({ message: 'email e senha não encontrados' }))
                    return
                }
                fs.writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => { 
                    if (err) {
                        response.writeHead(500, { 'Content-Type' : 'application/json' })
                        response.end(JSON.stringify({ message: 'Erro ao cadastrar o usuário no arquivo' }))
                        return;
                    }
                    response.writeHead(201, { 'Content-Type' : 'application/json' })
                    response.end(JSON.stringify(loginUsuario))
                })
            })
        })     
    }else if(url.startsWith('/perfil/imagem') && method === 'POST'){ // upload de uma nova imagem de perfil
    // entendi foi nada dessa bomba oxe 
    }else{ // rota nao encontrada 
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({message: "página não encontrada"}))
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})