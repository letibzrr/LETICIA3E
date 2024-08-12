import conn from "../config/conn.js"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from 'uuid';
import jwt from "jsonwebtoken"

//HELPERS
import createPalestranteToken from "../helpers/criar-palestrante-token.js";
//CONTROLLERS
export const create = (request, response) => {
    const {nome, expertise} = request.body

    const id= uuidv4()
    
    const insertSql = /*sql*/ `INSERT INTO palestrantes (??, ??, ??) VALUES (?, ?, ?)`
    const insertData = ["palestrante_id", "nome", "expertise", id, nome, expertise]

    conn.query(insertSql, insertData, (err) => {
        if(err){
            console.error(err)
            response.status(500).json({err: "Erro ao cadastrar palestrante"})
        }
        const palestranteSql = /*sql*/ `SELECT * FROM palestrantes WHERE ?? = ?`
        const palestranteData = ["palestrante_id", id]
        
        conn.query(palestranteSql, palestranteData, async (err, data) => {
            if(err){
                console.error(err)
                response.status(500).json({err: "Erro ao selecionar o palestrante"})
                return
            }
            const palestrante = data[0]
            try{
                await createPalestranteToken(palestrante, request, response)
            }catch(error){
                console.error(error)
            }
        })
    })
}
export const getAllPalestrante = (request, response) => {
    const selectSql = /*sql*/ `SELECT palestrante_id, nome, expertise FROM palestrantes`

    conn.query(selectSql, (err, data) => {
        if(err){
            console.error(err)
            return response.status(500).json({message: "Erro ao buscar palestrante"})
        }
        const palestrantesDados = data
        return response.status(200).json(palestrantesDados)
    });
}