import jwt from "jsonwebtoken"
import conn from "../config/conn.js"

const getUserByToken = async (token) => {
    return new Promise((resolve, reject) => {
        if(!token){
            return response.status(401).json({err: "Acesso negado"})
        }
        const decoded = jwt.verify(token, "SENHASUPERSEGURAEDIFICIL")
        const userId = decoded.id 

        const checkSql = /*sql*/ `SELECT * FROM usuarios WHERE ?? = ?`
        const checkData = ["usuario_id", userId]

        conn.query(checkSql, checkData, (err, data) => {
            if(err){
                reject({status: 500, message: "Erro ao buscar usuário"})
                return
            }else{
                resolve(data[0])
            }
        })
    })
}
export default getUserByToken;

