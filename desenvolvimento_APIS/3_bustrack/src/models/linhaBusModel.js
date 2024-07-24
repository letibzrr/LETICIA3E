import conn from "../config/conn.js"

const tableLinhaBus = /*sql*/ `
    CREATE TABLE IF NOT EXISTS linhas(
        linha_id VARCHAR(60) PRIMARY KEY, 
        nome_linha VARCHAR(255) NOT NULL,
        numero_linha VARCHAR(255) NOT NULL,
        itinerario VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
`
conn.query(tableLinhaBus, (err) => {
    if(err){
        console.log("Erro ao criar a tabela"+err.stack)
    }
    console.log("Tabela [linhas] criada com sucesso")
})