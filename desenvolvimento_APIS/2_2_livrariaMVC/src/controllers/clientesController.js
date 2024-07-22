// controlar as funções da tabela de clientes 
import { request, response } from "express";
import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid';
// exportação e criação das rotas
export const getClientes = (request, response) => {
    const sql = `SELECT * FROM clientes`
    conn.query(sql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar clientes"})
            return;
        }
        const clientes = data
        response.status(200).json(clientes);
    });
}
export const cadastrarCliente = (request, response) => {
    const {nome, email, senha, imagem} = request.body
    // validação
    if(!nome){
        response.status(400).json({message: "O nome é obrigatorio"})
        return
    }
    // validação email 
    if(!email){
        response.status(400).json({message: "O email é obrigatorio"})
        return
    }
    if(!email.includes("@")){
        response.status(422).json({message: "Email deve conter @"})
        return
    }
    if(!senha){
        response.status(400).json({message: "A senha é obrigatoria"})
        return
    }
    if(!imagem){
        response.status(400).json({message: "A imagem é obrigatoria"})
        return
    }
    // cadastro do cliente
    const checkEmailSql = /*sql*/ `SELECT * FROM clientes WHERE ?? = ?`
    const checkEmailSqlData = ["email", email]

    conn.query(checkEmailSql, checkEmailSqlData, (err, data) =>{
        if(err){
            response.status(500).json({message: "Erro ao buscar os clientes"})
            return console.log(err)
        }
        if(data.length > 0){
            response.status(409).json({message: "Email já está em uso!"})
            return console.log(err)
        }
    })
    const id = uuidv4()

    const insertSql = /*sql*/ `INSERT INTO clientes (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)` // as ?? são referencia as variaveis do insertData
    const insertData = ["cliente_id", "nome", "email", "senha", "imagem",
    id, nome, email, senha, imagem] // segurança do banco de dados, escondendo as variaveis

    conn.query(insertSql, insertData, (err) => {
        if(err){
            console.log(err)
            response.status(500).json({message: "Erro ao cadastrar cliente"})
            return 
        }
        response.status(201).json({message: "Cliente cadastrado"})
    })
} 
export const buscarCliente = (request, response) => {
    const {id} = request.params
    const sql = /*sql*/ `SELECT * FROM clientes WHERE id = "${id}"`
    conn.query(sql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao buscar cliente"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Cliente não encontrado"})
        }
        const clientes = data[0]
        return response.status(200).json(clientes)
    })
}
export const atualizarCliente = (request, response) => {
    const {id} = request.params
    const {nome, email, senha, imagem} = request.body
    // validação
    if(!nome){
        response.status(400).json({message: "O nome é obrigatorio"})
        return
    }
    // validação email 
    if(!email){
        response.status(400).json({message: "O email é obrigatorio"})
        return
    }
    if(!email.includes("@")){
        response.status(422).json({message: "Email deve conter @"})
        return
    }
    if(!senha){
        response.status(400).json({message: "A senha é obrigatoria"})
        return
    }
    if(!imagem){
        response.status(400).json({message: "A imagem é obrigatoria"})
        return
    }
    
    const checkEmailSql = /*sql*/ `SELECT * FROM clientes WHERE email = "${email}"`
    conn.query(checkEmailSql, (err, data) =>{
        if(err){
            response.status(500).json({message: "Erro ao buscar os clientes"})
            return console.log(err)
        }
        if(data.length > 0){
            response.status(409).json({message: "Email já está em uso!"})
            return console.log(err)
        }
    })
    //verificação se um email enviado já existe em outro usuario
    const emailCheckSql = /*sql*/ `SELECT * FROM clientes WHERE email = "${email}"
    AND id != "${id}"`

    conn.query(emailCheckSql, (err, data) =>{
        if(err){
            console.error(err)
            response.status(500).json({message:"Erro ao buscar cliente"})
        }
        if(data.length > 0){
            return response.status(409).json({message: "Email em uso!"})
        }
        // consultra sql para atualizar o cliente
        const updateSql = /*sql*/ `UPDATE clientes SET
        nome = "${nome}", email = "${email}", senha = "${senha}", 
        imagem = "${imagem}", WHERE id = "${id}" 
        `
        conn.query(updateSql, (err, data) => {
            if(err){
                console.error(err)
                response.status(500).json({message:"Erro ao atualizar cliente"})
            }
            if(data.length === 0){
                return response.status(404).json({message: "Cliente não encontrado"})
            }
            response.status(200).json({message: "Usuário atualizado"})
            })
        })
}



