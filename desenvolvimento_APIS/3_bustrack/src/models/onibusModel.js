import conn from "../config/conn.js"

const tableOnibus = /*sql*/ `
    CREATE TABLE IF NOT EXISTS onibus(
        onibus_id VARCHAR(60) PRIMARY KEY, 
        motorista_id VARCHAR(60) NOT NULL,
        linha_id VARCHAR(60) NOT NULL,
        placa VARCHAR(255) NOT NULL,
        modelo VARCHAR(255) NOT NULL,
        ano_fabricacao YEAR(4) NOT NULL,
        capacidade VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

        CONSTRAINT fk_Motorista FOREIGN KEY (motorista_id) REFERENCES motoristas(motorista_id),
        CONSTRAINT fk_Linha FOREIGN KEY (linha_id) REFERENCES linhas (linha_id)
    );
`
conn.query(tableOnibus, (err) => {
    if(err){
        console.log("Erro ao criar a tabela"+err.stack)
    }
    console.log("Tabela [onibus] criada com sucesso")
})