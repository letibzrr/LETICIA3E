import { request, response } from "express";
import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid';
// exportação e criação das rotas
export const getMotorista = (request, response) => {
    const sql = `SELECT * FROM motoristas`
    conn.query(sql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar motoristas"})
            return ;
        }
        const motoristas = data
        response.status(200).json(motoristas);
    });
};
export const cadastrarMotorista = (request, response) => {
    const {nome, data_nascimento, numero_carteira_habilitacao} = request.body
    if(!nome){
        response.status(400).json({message: "O nome do motorista é obrigatorio"})
        return
    }
    if(!data_nascimento){
        response.status(400).json({message: "A data de nascimento é obrigatoria"})
        return
    }
    if(!numero_carteira_habilitacao){
        response.status(400).json({message: "O número da carteira de habilitacao do onibus é obrigatoria"})
        return
    }
    const checkSql = /*sql*/ `SELECT * FROM motoristas WHERE ?? = ? AND ?? = ? AND ?? = ?` 
    const checkSqlData = ["nome", nome, "data_nascimento", data_nascimento, "numero_carteira_habilitacao", numero_carteira_habilitacao] 

    conn.query(checkSql, checkSqlData, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar motoristas"})
            return console.log(err)
        }
        if(data.length > 0){
            response.status(409).json({message: "Esse motorista já existe"})
            return console.log(err)
        }
        const id = uuidv4()

        const insertSql = /*sql*/ `INSERT INTO motoristas (??, ??, ??, ??) VALUES (?, ?, ?, ?)` 

        const insertData = ["motorista_id", "nome", "data_nascimento", "numero_carteira_habilitacao", id, nome, data_nascimento, numero_carteira_habilitacao] 

        conn.query(insertSql, insertData, (err) => {
            if(err){
                response.status(500).json({message: "Erro ao cadastrar motorista"})
                return console.log(err)
            }
            response.status(201).json({message: "Motorista cadastrado"})
        })
    })
};
export const buscarMotorista = (request, response) => {
    const {id} = request.params
    const sql = /*sql*/ `SELECT * FROM motoristas WHERE id = "${id}"`
    conn.query(sql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao buscar motorista"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Motorista não encontrada"})
        }
        const motorista = data[0]
        return response.status(200).json(motorista)
    })
};
export const deletarMotorista = (request, response) => {
};
