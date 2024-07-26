import { request, response } from "express";
import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid';
// exportação e criação das rotas
export const getLinhas = (request, response) => {
    const sql = `SELECT * FROM linhas`
    conn.query(sql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar linhas"})
            return ;
        }
        const linhas = data
        response.status(200).json(linhas);
    });
};
export const cadastrarLinhas = (request, response) => {
    const {nome_linha, numero_linha, itinerario} = request.body
    if(!nome_linha){
        response.status(400).json({message: "O nome da linha do onibus é obrigatorio"})
        return
    }
    if(!numero_linha){
        response.status(400).json({message: "O numero da linha do onibus é obrigatorio"})
        return
    }
    if(!itinerario){
        response.status(400).json({message: "O itinerario do onibus é obrigatorio"})
        return
    }
    const checkSql = /*sql*/ `SELECT * FROM linhas WHERE ?? = ? AND ?? = ? AND ?? = ?` 
    const checkSqlData = ["nome_linha", nome_linha, "numero_linha", numero_linha, "itinerario", itinerario] 

    conn.query(checkSql, checkSqlData, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar as linhas"})
            return console.log(err)
        }
        if(data.length > 0){
            response.status(409).json({message: "Essa linha já existe"})
            return console.log(err)
        }
        const id = uuidv4()

        const insertSql = /*sql*/ `INSERT INTO linhas (??, ??, ??, ??) VALUES (?, ?, ?, ?)` 

        const insertData = ["linha_id", "nome_linha", "numero_linha", "itinerario", id, nome_linha, numero_linha, itinerario] 

        conn.query(insertSql, insertData, (err) => {
            if(err){
                response.status(500).json({message: "Erro ao cadastrar linha"})
                return console.log(err)
            }
            response.status(201).json({message: "Linha cadastrado"})
        })
    })
};
export const buscarLinha = (request, response) => {
    const {id} = request.params
    const sql = /*sql*/ `SELECT * FROM linhas WHERE ?? = ?`
    const insertId = ["linha_id", id]
    conn.query(sql, insertId, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao buscar linhas"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Linha não encontrada"})
        }
        const linha = data[0]
        return response.status(200).json(linha)
    })
};
export const atualizarLinha = (req, res) => {
    const { linha_id } = req.params;
    console.log(linha_id)
    const { nome_linha, numero_linha, itinerario } = req.body;

    if (!nome_linha || !numero_linha || !itinerario) {
      return res.status(400).json({
        message:
          "Dados incompletos ou inseridos de forma incorreta. Tente novamente.",
      });
    }

    try {
      const dataId = conn.query(`SELECT linha_id FROM linhas WHERE nome_linha = "${nome_linha}" AND numero_linha = "${numero_linha}"`)

        if(dataId.length === 0) {
            return res.status(404).json({
                message: "Linha não encontrada na base de dados!"
            })
        }
    
    const DataUpdateLinha = conn.query(`UPDATE linhas SET nome_linha = "${nome_linha}", numero_linha =  "${numero_linha}", itinerario = "${itinerario}" WHERE linha_id = "${linha_id}"`)
 
    conn.query(DataUpdateLinha,  (err, data) => {
        if(err) {
            res.status(400).json({message: "Erro ao tentar enviar os dados!"})
        }

        res.status(200).json({ message: "Linha atualizada com sucesso." });
    })
    } catch (error) {
      res.status(500).json({message: "Erro ao tentar veficar os dados!"})
    }
  };
  
