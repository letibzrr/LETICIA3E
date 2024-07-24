import { request, response } from "express";
import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid';
// exportação e criação das rotas
export const getonibus = (request, response) => {
    const sql = `SELECT * FROM onibus`
    conn.query(sql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar onibus"})
            return ;
        }
        const onibus = data
        response.status(200).json(onibus);
    });
};
export const cadastrarOnibus = (request, response) => {
    const {placa, modelo, ano_fabricacao, capacidade} = request.body
    if(!placa){
        response.status(400).json({message: "A placa é obrigatoria"})
        return
    }
    if(!modelo){
        response.status(400).json({message: "O modelo é obrigatorio"})
        return
    }
    if(!ano_fabricacao){
        response.status(400).json({message: "O ano de fabricacao é obrigatorio"})
        return
    }
    if(!capacidade){
        response.status(400).json({message: "A capacidade é obrigatoria"})
        return
    }
    const checkSql = /*sql*/ `SELECT * FROM onibus WHERE ?? = ? AND ?? = ? AND ?? = ? AND ?? = ?` 
    const checkSqlData = ["placa", placa, "modelo", modelo, "ano_fabricacao", ano_fabricacao, "capacidade", capacidade] 

    conn.query(checkSql, checkSqlData, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar onibus"})
            return console.log(err)
        }
        if(data.length > 0){
            response.status(409).json({message: "Esse onibus já existe"})
            return console.log(err)
        }
        const id = uuidv4()

        const insertSql = /*sql*/ `INSERT INTO onibus (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)` 

        const insertData = ["onibus_id", "motorista_id", "linha_id", "placa", "modelo", "ano_fabricacao", "capacidade",
        onibus_id, motorista_id, linha_id, placa, modelo, ano_fabricacao, capacidade] 

        conn.query(insertSql, insertData, (err) => {
            if(err){
                response.status(500).json({message: "Erro ao cadastrar onibus"})
                return console.log(err)
            }
            response.status(201).json({message: "Onibus cadastrado"})
        })
    })
};
export const buscarOnibus = (request, response) => {
    const {id} = request.params
    const sql = /*sql*/ `SELECT * FROM onibus WHERE id = "${id}"`
    conn.query(sql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao buscar onibus"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Onibus não encontrado"})
        }
        const onibus = data[0]
        return response.status(200).json(onibus)
    })
};
