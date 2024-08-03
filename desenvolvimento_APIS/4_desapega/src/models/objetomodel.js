import conn from "../config/conn.js"
//1:N UM PARA VARIOS
const tableObjeto = /*sql*/ `
    CREATE TABLE IF NOT EXISTS objetos(
        objeto_id VARCHAR(60) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        peso VARCHAR(255) NOT NULL,
        cor VARCHAR(255) NOT NULL,
        descricao TEXT,
        disponivel BOOLEAN,
        usuario_id VARCHAR(60),

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
    )
`
conn.query(tableObjeto, (err) => {
    if(err){
        return console.error(err)
    }
    console.log("Tabela de [objetos] criada com sucesso")
})