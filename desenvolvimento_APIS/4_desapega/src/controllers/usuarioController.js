import conn from "../config/conn.js"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from 'uuid';
import jwt from "jsonwebtoken"

//helpers
import createUserToken from "../helpers/criar-usuarios-token.js";
import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";

export const register = (request, response) => {
    const {nome, email, telefone, senha, confirmsenha} = request.body 

    const checkEmailSQL = /*sql*/ `SELECT * FROM usuarios WHERE ?? = ?`
    const checkEmailData = ["email", email]
    conn.query(checkEmailSQL, checkEmailData, async (err, data) => {
        if(err){
            console.log(err)
            response.status(500).json({err: "Não foi possível buscar usuário"})
            return
        }
        if(data.length > 0){
            response.status(409).json({err: "Email está em uso"})
            return
        }
        // criação de senha do usuário
        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(senha, salt)

        //cadastrar usuário

        const id= uuidv4()
        const imagem = 'userDefault.png';

        const insertSql = /*sql*/ `INSERT INTO usuarios
            (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)
        `
        const insertData = ["usuario_id", "nome", "email", "telefone", "senha", "imagem",
        id, nome, email, telefone, senhaHash, imagem]

        conn.query(insertSql, insertData, (err) => {
            if(err){
                console.error(err)
                response.status(500).json({err: "Erro ao cadastrar usuário"})
            }
            const usuarioSql = /*sql*/ `SELECT * FROM usuarios WHERE ?? = ?`
            const usuarioData = ["usuario_id", id]
            conn.query(usuarioSql, usuarioData, async (err, data) => {
                if(err){
                    console.error(err)
                    response.status(500).json({err: "Erro ao selecionar o usuário"})
                    return
                }
                const usuario = data[0]
                try {
                  await createUserToken(usuario, request, response)
                } catch (error){
                    console.error(error)
                }
            })
        })
    })
}
export const login = (request, response) => {
    const {email, senha} = request.body

    if(!email){
        response.status(400).json({err: "O email é obrigatorio"})
    }
    if(!senha){
        response.status(400).json({err: "A senha é obrigatorio"})
    }

    const checkSql = /*sql*/ `SELECT * FROM usuarios WHERE ?? = ?`
    const checkData = ["email", email]
    conn.query(checkSql, checkData, async (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({err: "Erro ao buscar usuario"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Usuario nao encontrado"})
            return
        }
        const usuario = data[0]

        const compararSenha = await bcrypt.compare(senha, usuario.senha)
        // console.log("Senha do usuário: ", senha)
        // console.log("Senha do objeto: ", usuario.senha)
        // console.log("Comparar senha: ", compararSenha)
        if(!compararSenha){
            response.status(401).json({message: "Senha inválida"})
            return
        }
        try {
            await createUserToken(usuario, request, response)
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Erro ao processar informação"})
        }
    })
}
export const checkUser = (request, response) => {
    let usuarioAtual 
    if(request.headers.authorization){
        const token = getToken(request)
        const decoded = jwt.decode(token, "SENHASUPERSEGURAEDIFICIL")
        const usuarioID = decoded.id

        const checkSql = /*sql*/ `SELECT * FROM usuarios WHERE ?? = ?`
        const checkData = ["usuario_id", usuarioID]

        conn.query(checkSql, checkData, (err, data) => {
            if(err){
                console.error(err)
                response.status(500).json({err: "Erro ao verificar usuário"})
                return
            }
            usuarioAtual = data[0]
            response.status(200).json(usuarioAtual)
        })
    }else{
        usuarioAtual = null
    }
} 
export const getUserById = (request, response) => {
    const {id} = request.params
    const checkSql = /*sql*/ `
        SELECT usuario_id, nome, email, telefone, imagem FROM usuarios WHERE ?? = ?
    `
    const checkData = ["usuario_id", id]
    conn.query(checkSql, checkData, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({err: "Erro ao buscar usuário"})
            return
        }
        if(data.length === 0){
            response.status(404).json({err: "Usuário não encontrado"})
            return
        }
        const usuario = data[0]
        response.status(200).json(usuario)
    })
}
export const updateUser = async (request, response) => {
    //verificar se o usuario está logado e possibilitar upload de imagem para perfil
    const {id} = request.params
    try{
        const token = getToken(request)
        const user = await getUserByToken(token)
        const {nome, email, telefone} = request.body

        // adicionar imagem ao objeto
        let imagem = user.imagem
        if(request.file){
            imagem = request.file.filename
        }

        //validação
        if(!nome){
            return response.status(400).json({message: "O nome é obrigatório"})
        }
        if(!telefone){
            return response.status(400).json({message: "O telefone é obrigatório"})
        }
        if(!email){
            return response.status(400).json({message: "O email é obrigatório"})
        }
        const checkSql = /*sql*/ `SELECT * FROM usuarios WHERE ?? = ?`
        const checkData = ["usuario_id", id]
        
        conn.query(checkSql, checkData, (err, data) => {
            if(err){
                console.error(err)
                return response.status(500).json({err: "Erro ao buscar usuário"}) 
            }
            if(data.length === 0){
                return response.status(404).json({err: "Usuário não encontrado"})
            }
            const checkEmailSql = /*sql*/ `SELECT * FROM usuarios WHERE ?? = ? AND ?? != ?`
            const checkEmailData = ["email", email, "usuario_id", id]   
            conn.query(checkEmailSql, checkEmailData, (err, data) => {
                if(err){
                    console.error(err)
                    return response.status(500).json({err: "Erro ao buscar email"})
                }
                if(data.length > 0){
                    return response.status(409).json({err: "Email em uso"})
                }
                const updateSql = /*sql*/ `UPDATE usuarios SET ? WHERE ?? = ?`
                const updateData = [{nome, email, telefone, imagem}, "usuario_id", id]
                conn.query(updateSql, updateData, (err) => {
                    if(err){
                        console.error(err)
                        return response.status(500).json({err: "Erro ao atualizar usuário"})
                    }
                    response.status(200).json({message: "Usuário atualizado"})
                })
            })
        })
    } catch(error){
        console.error(error)
        response.status(error.status || 500).json({message: error.message || "Erro interno do servidor"})
    }
}