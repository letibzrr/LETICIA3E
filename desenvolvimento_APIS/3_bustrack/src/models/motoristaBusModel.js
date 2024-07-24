import conn from "../config/conn.js"

const tableMotoristaBus = /*sql*/ `
    CREATE TABLE IF NOT EXISTS motoristas(
        motorista_id VARCHAR(60) PRIMARY KEY, 
        nome VARCHAR(255) NOT NULL,
        data_nascimento DATE NOT NULL,
        numero_carteira_habilitacao VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
`
conn.query(tableMotoristaBus, (err) => {
    if(err){
        console.log("Erro ao criar a tabela"+err.stack)
    }
    console.log("Tabela [motoristas] criada com sucesso")
})