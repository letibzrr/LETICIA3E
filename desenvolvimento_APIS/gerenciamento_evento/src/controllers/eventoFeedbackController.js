import conn from "../config/conn.js"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from 'uuid';

export const feedback = (request, response) => {
  const { evento_id, participante_id, nota, comentario } = request.body;
  
    if(!nota){
    return response.status(400).json({message: "A nota do feedback é obrigatória"})
    }
    if(!comentario){
    return response.status(400).json({message: "O comentario do feedback é obrigatório"})
    }

  const feedback_id = uuidv4();
  const insertSql =  /*sql*/ `INSERT INTO eventos_feedback (feedback_id, evento_id, participante_id, nota, comentario) VALUES (?, ?, ?, ?, ?)`;
  const insertData = ["feedback_id", "evento_id", "participante_id", "nota", "comentario", feedback_id, evento_id, participante_id, nota, comentario]
  
  conn.query(insertSql, insertData,(err) => {
    if(err){
        console.error(err)
        return response.status(500).json({err: "Erro ao cadastrar feedback"})
    }
    return response.status(201).json({message: "Feedback cadastrado com sucesso"})
    }
  );
};
