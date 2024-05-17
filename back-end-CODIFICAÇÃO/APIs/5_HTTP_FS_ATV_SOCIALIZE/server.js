import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { writeFile, rename } from "node:fs";
import path, { dirname } from 'node:path'
import formidable, {errors as formidableErrors} from 'formidable';
import { v4 as uuidv4 } from 'uuid';
import lerDadosUsuarios from "./readUsuarios.js";

const PORT = 3333 
const __filename = fileURLToPath(import.meta.url)
const __dirname = (__filename)

const server = createServer(async(request, response) => {
    const {method, url} = request

    // TRABALHANDO COM IMAGENS
    // => caminho de onde a imagem está na aplicação - PATH
    // ==> 1) colocar a imagem em uma pasta na raiz do projeto - gratuito 
    // ==> 2) contrar serviços (API's) para adicionar imagem - custo alto

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
         // mudar para uuid
        // const id = parseInt(url.split('/')[2])
        // lerDadosUsuarios((err, usuarios) => {
        //     if(err){
        //         response.writeHead(500, {'Content-Type':'application/json'})
        //         response.end(JSON.stringify({message: 'Erro interno no servidor'}))
        //         return; 
        //     }
        //     const indexUsuario = usuarios.findIndex((usuario) => usuario.id === id) // encontrar usuario especifico atraves do id
        //     if(indexUsuario === -1){ // retorno negativo
        //         response.writeHead(404, {'Content-Type':'application/json'})
        //         response.end(JSON.stringify({message: 'usuario não encontrado'}))
        //         return;
        //     }
        //     const usuarioEncontrado = usuarios[indexUsuario] // retorno positivo
        //     response.writeHead(200, {'Content-Type':'application/json'})
        //     response.end(JSON.stringify(usuarioEncontrado))
        // })
    }else if(url.startsWith('/perfil/') && method === 'PUT'){ // atualizar o perfil do usuário
        // mudar para uuid
        // const id = parseInt(url.split('/')[2])
        // let body = ''
        // request.on('data', (chunk) => {
        //     body += chunk
        // })
        // request.on('end', () => {
        //     lerDadosUsuarios((err, usuarios) => {
        //         if(err){
        //             response.writeHead(500, {'Content-Type':'application/json'})
        //             response.end(JSON.stringify({message: 'Erro ao ler dados do usuario'}))
        //             return;
        //         }

        //         const indexUsuario = usuarios.findIndex((usuario) => usuario.id === id) // encontrar usuario especifico atraves do id
        //         if(indexUsuario === -1){
        //             response.writeHead(404, {'Content-Type':'application/json'})
        //             response.end(JSON.stringify({message: 'usuario não encontrado'})) // retorno negativo
        //             return
        //         }
        //         const usuarioAtualizado = JSON.parse(body)
        //         usuarioAtualizado.id = id
        //         usuarios[indexUsuario] = usuarioAtualizado

        //         writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => {
        //             if(err){
        //                 response.writeHead(500, {'Content-Type':'application/json'})
        //                 response.end(JSON.stringify({message: 'Erro ao salvar os dados'}))
        //                 return
        //             }
        //             response.writeHead(201, {'Content-Type':'application/json'})
        //             response.end(JSON.stringify(usuarioAtualizado)) // retorno positivo
        //         })
        //     })
        // })
    }else if(url.startsWith('/usuarios') && method === 'POST'){ // cadastrar na rede social
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            const novoUsuario = JSON.parse(body)
            lerDadosUsuarios((err, usuarios) => { 
                if (err) {
                    response.writeHead(500, { 'Content-Type' : 'application/json' })
                    response.end(JSON.stringify({ message: 'Erro ao ler dados do usuário' }))
                    return;
                }
                novoUsuario.id = uuidv4() 
                const usuarioExistente = usuarios.find(usuario => usuario.email === novoUsuario.email) // validação de email
                if (usuarioExistente) {
                    response.writeHead(400, { 'Content-Type': 'application/json' })
                    response.end(JSON.stringify({ message: 'Este email já está cadastrado' }))
                    return
                }
                usuarios.push(novoUsuario)
                writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => { 
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
        // let body = ''
        // request.on('data', (chunk) => {
        //     body += chunk
        // })
        // request.on('end', () => {
        //     if (!body) {
        //         response.writeHead(400, { 'Content-Type' : 'application/json' })
        //         response.end(JSON.stringify({ message: 'Corpo da solicitação vazio' }))
        //         return
        //     }
        //     const loginUsuario = JSON.parse(body)
        //     lerDadosUsuarios((err, usuarios) => { 
        //         if (err) {
        //             response.writeHead(500, { 'Content-Type' : 'application/json' })
        //             response.end(JSON.stringify({ message: 'Erro ao ler dados do usuário' }))
        //             return;
        //         }
        //         const loginEmailSenha = usuarios.find(usuario => usuario.email === loginUsuario.email && usuario.senha === loginUsuario.senha) // validação de email e senha
        //         if (loginEmailSenha) {
        //             response.writeHead(201, { 'Content-Type': 'application/json' })
        //             response.end(JSON.stringify(loginUsuario))
        //             return
        //         }else if (!loginEmailSenha) {
        //             response.writeHead(400, { 'Content-Type': 'application/json' })
        //             response.end(JSON.stringify({ message: 'email e senha não encontrados' }))
        //             return
        //         }
        //         writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => { 
        //             if (err) {
        //                 response.writeHead(500, { 'Content-Type' : 'application/json' })
        //                 response.end(JSON.stringify({ message: 'Erro ao cadastrar o usuário no arquivo' }))
        //                 return;
        //             }
        //             response.writeHead(201, { 'Content-Type' : 'application/json' })
        //             response.end(JSON.stringify(loginUsuario))
        //         })
        //     })
        // })     
    }else if(url.startsWith('/perfil') && method === 'POST'){ // cadastrar perfil
        // codigo formidavle
        const form = formidable({});
        let fields;
        let files;
        try {
            [fields, files] = await form.parse(request);
        } catch (err) {
            if (err.code === formidableErrors.maxFieldsExceeded) {
            }
            console.error(err);
            response.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
            response.end(String(err));
            return;
        }
        // informações do perfil
        const {id, nome, bio} = fields
        const imagemDePerfil = files.imagemDePerfil
        // normalizaão do caminho da imagem ==> falta fazer
        
        // validações
        if(!nome || !bio || !imagemDePerfil){
            response.writeHead(400, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({error: 'todos os campos são obrigatórios'}));
            return
        }
        lerDadosUsuarios((err, usuarios) => {
            if(err){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro ao ler os dados'})) 
                return      
            }
            const indexUsuario = usuarios.findIndex((usuario) => usuario.id === id[0])
            if(indexUsuario === -1){
                response.writeHead(404, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'usuario não encontrado'})) 
                return
            }
            // caminho da imagem de perfil
            const caminhoImg = path.join(__dirname, "imagens", id+".png")
            const perfil = {
                nome: nome[0],
                bio: bio[0],
                caminhoImg
            }

            usuarios[indexUsuario] = {...usuarios[indexUsuario], perfil}

            writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => { 
                if (err) {
                    response.writeHead(500, { 'Content-Type' : 'application/json' })
                    response.end(JSON.stringify({ message: 'Erro ao cadastrar o perfil do usuario no arquivo' }))
                    return;
                }
                // adicionar arquivo da imagem
                rename(files.imagemDePerfil[0].filepath, caminhoImg, (err) => {
                    if (err) {
                        response.writeHead(500, { 'Content-Type' : 'application/json' })
                        response.end(JSON.stringify({ message: 'Erro ao salvae a imagem do perfil' }))
                        return;
                    }
                })
                response.writeHead(201, {'Content-Type': 'application/json'})
                response.end(JSON.stringify({message: "Perfil criado"}))
            })
        })

    }else if(url.startsWith('/perfil/imagem') && method === 'PATH'){ // upload de uma nova imagem de perfil
        // falta fazer
    }else{ // rota nao encontrada 
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({message: "página não encontrada"}))
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})

