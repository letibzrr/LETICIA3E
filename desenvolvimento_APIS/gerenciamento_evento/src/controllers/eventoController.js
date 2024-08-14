import conn from "../config/conn.js"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from 'uuid';
import jwt from "jsonwebtoken"

//HELPERS
import getPalestranteByToken from "../helpers/get-palestrante-by-token.js"
//CONTROLLERS
export const create = (request, response) => {
    const {titulo, data} = request.body

    const palestrante = getPalestranteByToken

    if(!titulo){
        return response.status(400).json({message: "O titulo do evento é obrigatório"})
    }
    if(!data){
        return response.status(400).json({message: "A data do evento é obrigatória"})
    }

    const evento_id = uuidv4()
    const palestrante_id = palestrante.palestrante_id

    const insertSql = /*sql*/ `INSERT INTO eventos(??, ??, ??, ??) VALUES(?, ?, ?, ?)`
    const insertData = ["evento_id", "titulo", "data", "palestrante_id", evento_id, titulo, data, palestrante_id]

    conn.query(insertSql, insertData, (err) => {
        if(err){
            console.error(err)
            return response.status(500).json({err: "Erro ao cadastrar evento"})
        }
        const eventoSql = /*sql*/ `SELECT * FROM eventos WHERE ?? = ?`
        const eventoData = ["evento_id", evento_id]
        
        conn.query(eventoSql, eventoData, (err) => {
            if(err){
                console.error(err)
                return response.status(500).json({err: "Erro ao selecionar o evento"})
            }
            return response.status(201).json({message: "Evento cadastrado com sucesso"})
        })
    })
}
export const agenda = (request, response) => {
    const selectSql = /*sql*/ `SELECT evento_id, titulo, data, palestrante_id FROM eventos`

    conn.query(selectSql, (err, data) => {
        if(err){
            console.error(err)
            return response.status(500).json({message: "Erro ao buscar evento"})
        }
        const eventosDados = data
        return response.status(200).json(eventosDados)
    })
}