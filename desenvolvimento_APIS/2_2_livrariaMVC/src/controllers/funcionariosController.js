// controlar as funções da tabela de funcionarios 
import { request, response } from "express";
import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid';
// exportação e criação das rotas
export const getFuncionarios =(request, response) => {
    const sql = `SELECT * FROM funcionarios`
    conn.query(sql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar funcionarios"})
            return;
        }
        const funcionarios = data
        response.status(200).json(funcionarios);
    });
}
export const cadastrarFuncionario =(request, response) => {
    const {nome, cargo, data_contratacao, salario, email} = request.body
    // validação
    if(!nome){
        response.status(400).json({message: "O nome é obrigatorio"})
        return
    }
    if(!cargo){
        response.status(400).json({message: "O cargo é obrigatorio"})
        return
    }
    if(!data_contratacao){
        response.status(400).json({message: "A data de contratação é obrigatorio"})
        return
    }
    if(!salario){
        response.status(400).json({message: "O salario é obrigatorio"})
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
    const checkEmailSql = /*sql*/ `SELECT * FROM funcionarios WHERE email = "${email}"`
    conn.query(checkEmailSql, (err, data) =>{
        if(err){
            response.status(500).json({message: "Erro ao buscar os funcionarios"})
            return console.log(err)
        }
        if(data.length > 0){
            response.status(409).json({message: "Email já está em uso!"})
            return console.log(err)
        }
    })
    const id = uuidv4()

    const insertSql = /*sql*/ `INSERT INTO funcionarios
    (id, nome, cargo, data_contratacao, salario, email)
    VALUES ("${id}", "${nome}", "${cargo}", "${data_contratacao}", "${salario}", "${email}")`

    conn.query(insertSql, (err) => {
        if(err){
            console.log(err)
            response.status(500).json({message: "Erro ao cadastrar funcionario"})
            return 
        }
        response.status(201).json({message: "Funcionario cadastrado"})
    })
}
export const buscarFuncionario =(request, response) => {
    const {id} = request.params
    const sql = /*sql*/ `SELECT * FROM funcionarios WHERE id = "${id}"`
    conn.query(sql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao buscar funcionario"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Funcionario não encontrado"})
        }
        const funcionario = data[0]
        return response.status(200).json(funcionario)
    })
}
export const atualizarFuncionario =(request, response) => {
    const {id} = request.params
    const {nome, cargo, data_contratacao, salario, email} = request.body;
    // validação
    if(!nome){
        response.status(400).json({message: "O nome é obrigatorio"})
        return
    }
    if(!cargo){
        response.status(400).json({message: "O cargo é obrigatorio"})
        return
    }
    if(!data_contratacao){
        response.status(400).json({message: "A data de contratação é obrigatorio"})
        return
    }
    if(!salario){
        response.status(400).json({message: "O salario é obrigatorio"})
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
    const checkSql = /*sql*/ `SELECT * FROM funcionarios WHERE id = "${id}"`
    conn.query(checkSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message:"Erro ao buscar funcionario"})
        }
        if(data.length === 0){
            return response.status(404).json({message: "Funcionario não encontrado"})
        }
    })
    //verificação se um email enviado já existe em outro usuario
    const emailCheckSql = /*sql*/ `SELECT * FROM funcionarios WHERE email = "${email}"
    AND id != "${id}"`

    conn.query(emailCheckSql, (err, data) =>{
        if(err){
            console.error(err)
            response.status(500).json({message:"Erro ao buscar funcionario"})
        }
        if(data.length > 0){
            return response.status(409).json({message: "Email em uso!"})
        }
        // consultra sql para atualizar o funcionario
        const updateSql = /*sql*/ `UPDATE funcionarios SET
        nome = "${nome}", cargo = "${cargo}", data_contratacao = "${data_contratacao}", 
        salario = "${salario}", WHERE id = "${id}" 
        `
        conn.query(updateSql, (err, data) => {
            if(err){
                console.error(err)
                response.status(500).json({message:"Erro ao atualizar funcionario"})
            }
            if(data.length === 0){
                return response.status(404).json({message: "Funcionario não encontrado"})
            }
            response.status(200).json({message: "Usuário atualizado"})
            })
        })
}
export const deletarFuncionario =(request, response) => {
    const {id} = request.params
    const deleteSql = /*sql*/ `DELETE FROM funcionarios WHERE id = "${id}"`
    conn.query(deleteSql, (err, info) => {
        if(err){
            response.status(500).json({message: "Erro ao deletar funcionario"})
            return
        }
        if(info.affectedRows === 0){
            response.status(404).json({message: "Funcionario não encontrado"})
            return 
        }
        response.status(200).json({message: "Funcionario selecionado foi deletado"})
    })
}