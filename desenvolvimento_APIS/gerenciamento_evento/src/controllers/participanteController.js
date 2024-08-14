import conn from "../config/conn.js"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from 'uuid';
import jwt from "jsonwebtoken"

//HELPERS
import createParticipanteToken from "../helpers/criar-participante-token.js"
//CONTROLLERS
export const registrar = (request, response) => {
    const {nome, email} = request.body

    const checkEmailSQL = /*sql*/ `SELECT * FROM participantes WHERE ?? = ?`
    const checkEmailData = ["email", email]

    conn.query(checkEmailSQL, checkEmailData, async (err, data) => {
        if(err){
            console.log(err)
            response.status(500).json({err: "Não foi possível buscar participante"})
            return
        }
        if(data.length > 0){
            response.status(409).json({err: "Email está em uso"})
            return
        }

        const id= uuidv4()

        const insertSql = /*sql*/ `INSERT INTO participantes(??, ??, ??) VALUES (?, ?, ?)`
        const insertData = ["participante_id", "nome", "email", id, nome, email]

        conn.query(insertSql, insertData, (err) => {
            if(err){
                console.error(err)
                response.status(500).json({err: "Erro ao registrar participante"})
            }
            const participanteSql = /*sql*/ `SELECT * FROM participantes WHERE ?? = ?`
            const participanteData = ["participante_id", id]

            conn.query(participanteSql, participanteData, async (err, data) => {
                if(err){
                    console.error(err)
                    response.status(500).json({err: "Erro ao selecionar o participante"})
                    return
                }
                const participante = data[0]
                try{
                    await createParticipanteToken(participante, request, response)
                }catch(error){
                    console.error(error)
                }
            })
        })
    })
}
export const inscrever = (request, response) => {
    const {participante_id, evento_id} = request.body

    const checkSql = /*sql*/ `SELECT * FROM participantes WHERE ?? = ? AND ?? = ?`
    const checkData = ["participante_id", participante_id, "evento_id", evento_id]

    conn.query(checkSql, checkData, async (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({err: "Erro ao buscar participante"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Participante nao encontrado"})
            return
        }
        return response.status(201).json({message: "Inscrição realizada"})

    })
}