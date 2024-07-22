// criação da tabela de emprestimos
import conn from "../config/conn.js";

const tableEmprestimos = /*sql*/ `
    CREATE TABLE IF NOT EXISTS emprestimos(
        emprestimo_id VARCHAR(60) PRIMARY KEY AUTO_INCREMENT,
        cliente_id VARCHAR(60) NOT NULL,
        livro_id VARCHAR(60) NOT NULL,
        data_emprestimo DATE NOT NULL,
        data_devolucao DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

        FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id),
        FOREIGN KEY (livro_id) REFERENCES livros (livro_id)
    );
`
conn.query(tableEmprestimos, (err, result, field) => {
    if(err){
        console.error("Erro ao criar a tabela"+err.stack)
    }
    //console.log(result)
    //console.log(field)
    console.log("Tabela [emprestimos] criada com sucesso")
})



