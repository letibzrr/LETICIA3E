import conn from "../config/conn.js"

const tableEventoFeedback = /*sql*/ `
    CREATE TABLE IF NOT EXISTS eventos_feedback(
        feedback_id VARCHAR(60) PRIMARY KEY,
        nota INT NOT NULL,
        comentario VARCHAR(255) NOT NULL,
        participante_id VARCHAR(60), 
        evento_id VARCHAR(60), 

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (participante_id) REFERENCES participantes(participante_id),
        FOREIGN KEY (evento_id) REFERENCES eventos(evento_id)
    )
`
conn.query(tableEventoFeedback, (err) => {
    if(err){
        return console.error(err)
    }
    console.log("Tabela de [eventos_feedback] criada com sucesso")
})