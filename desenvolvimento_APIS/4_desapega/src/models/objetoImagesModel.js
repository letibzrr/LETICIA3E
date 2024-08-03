import conn from "../config/conn.js"

const tableObjetoImagens = /*sql*/ `
    CREATE TABLE IF NOT EXISTS objetos_imagens(
        imagem_id VARCHAR(60) PRIMARY KEY,
        imagem_path VARCHAR(255) NOT NULL,
        objeto_id VARCHAR(60),

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (objeto_id) REFERENCES objetos(objeto_id)
    )
`
conn.query(tableObjetoImagens, (err) => {
    if(err){
        return console.error(err)
    }
    console.log("Tabela de [objetos_imagens] criada com sucesso")
})