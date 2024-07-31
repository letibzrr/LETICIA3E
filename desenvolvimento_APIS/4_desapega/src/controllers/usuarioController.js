import conn from "../config/conn.js"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from 'uuid';
import jwt from "jsonwebtoken"

//helpers
import createUserToken from "../helpers/criar-usuarios-token.js";
import { request, response } from "express";
import getToken from "../helpers/get-token.js";

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