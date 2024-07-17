import "dotenv/config"
import express, { request, response } from "express"
import mysql from "mysql2"
import { v4 as uuidv4 } from "uuid"

const PORT = process.env.PORT // normalização da porta em arquivo env
const app = express() // recepção de todos os dados 
app.use(express.json()) // utilizção do json
const conn = mysql.createConnection({ // criação de conexão com o banco de dados
    host: 'localhost',
    user: 'root',
    password: 'Sen@iDev77!.',
    database: 'livraria_api',
    port: 3306
})
conn.connect((err) => { // conexão de fato com o banco de dados
    if(err){
        return console.error(err.stack) // exibir qual exatamente é o erro (stack)
    }
    console.log("Mysql Conectado")
    app.listen(PORT, () => {
        console.log("Servidor on PORT"+PORT)
    })
}) 
// rotas de livros
app.get("/livros", (request, response) => { // selecionar os dados pelo corpo 
    const sql = /*sql*/ "SELECT * FROM livros";
    conn.query(sql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar os livros"})
            return console.log(err);
        }
        const livros = data;
        response.status(200).json(livros)
    })
})
app.post("/livros", (request, response) => { // cadastro do livro -> validação da existencia do livro
    const {titulo, autor, ano_publicacao, genero, preco} = request.body
    // validação
    if(!titulo){
        response.status(400).json({message: "O titulo é obrigatorio"})
        return
    }
    if(!autor){
        response.status(400).json({message: "O autor é obrigatorio"})
        return
    }
    if(!ano_publicacao){
        response.status(400).json({message: "O ano de publicação é obrigatorio"})
        return
    }
    if(!genero){
        response.status(400).json({message: "O genero é obrigatorio"})
        return
    }
    if(!preco){
        response.status(400).json({message: "O preço é obrigatorio"})
        return
    }
    const checkSql = /*sql*/ `SELECT * FROM livros WHERE titulo = "${titulo}"
    AND autor = "${autor}" AND ano_publicacao = "${ano_publicacao}"`

    conn.query(checkSql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar os livros"})
            return console.log(err)
        }
        if(data.length > 0){
            response.status(409).json({message: "Livro já existe na livraria"})
            return console.log(err)
        }
        const id = uuidv4()
        const disponibilidade = 1

        const insertSql = /*sql*/ `INSERT INTO livros
        (id, titulo, autor, ano_publicacao, genero, preco, disponibilidade)
        VALUES ("${id}", "${titulo}", "${autor}", "${ano_publicacao}", "${genero}", "${preco}", "${disponibilidade}")`

        conn.query(insertSql, (err) => {
            if(err){
                response.status(500).json({message: "Erro ao cadastrar livro"})
                return console.log(err)
            }
            response.status(201).json({message: "Livro cadastrado"})
        })
    })
})
app.get('/livros/:id', (request, response) => { // listar livro por id
    const {id} = request.params
    const sql = /*sql*/ `SELECT * FROM livros WHERE id = "${id}"`
    conn.query(sql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao buscar livro"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Livro não encontrado"})
        }
        const livro = data[0]
        return response.status(200).json(livro)
    })
})
app.put('/livros/:id', (request, response) => { // atualizar livro
    const {id} = request.params
    const {titulo, autor, ano_publicacao, genero, preco, disponibilidade} = request.body;
    // validação
    if(!titulo){
        response.status(400).json({message: "O titulo é obrigatorio"})
        return
    }
    if(!autor){
        response.status(400).json({message: "O autor é obrigatorio"})
        return
    }
    if(!ano_publicacao){
        response.status(400).json({message: "O ano de publicação é obrigatorio"})
        return
    }
    if(!genero){
        response.status(400).json({message: "O genero é obrigatorio"})
        return
    }
    if(!preco){
        response.status(400).json({message: "O preço é obrigatorio"})
        return
    }
    if(disponibilidade === undefined){
        response.status(400).json({message: "O disponibilidade é obrigatorio"})
        return
    }
    const checkSql = /*sql*/ `SELECT * FROM livros WHERE id = "${id}"`
    conn.query(checkSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message:"Erro ao buscar livro"})
        }
        if(data.length === 0){
            return response.status(404).json({message: "Livro não encontrado"})
        }
    })
    // consultra sql para atualizar o livro
    const updateSql = /*sql*/ `UPDATE livros SET
    titulo = "${titulo}", autor = "${autor}", ano_publicacao = "${ano_publicacao}", 
    genero = "${genero}", preco = "${preco}", disponibilidade = "${disponibilidade}"
    WHERE id = "${id}" 
    `
    conn.query(updateSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message:"Erro ao buscar livro"})
        }
        if(data.length === 0){
            return response.status(404).json({message: "Livro não encontrado"})
        }
    })
})
app.delete('/livros/:id', (request, response) => {
    const {id} = request.params
    const deleteSql = /*sql*/ `DELETE FROM livros WHERE id = "${id}"`
    conn.query(deleteSql, (err, info) => {
        if(err){
            response.status(500).json({message: "Erro ao deletar livro"})
            return
        }
        if(info.affectedRows === 0){
            response.status(404).json({message: "Livro não encontrado"})
            return 
        }
        response.status(200).json({message: "Livro selecionado foi deletado"})
    })
})
// rotas de funcionarios
app.get("/funcionarios", (request, response) => { // selecionar os dados pelo corpo 
    const sql = /*sql*/ "SELECT * FROM funcionarios";
    conn.query(sql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar os funcionarios"})
            return console.log(err);
        }
        const funcionarios = data;
        response.status(200).json(funcionarios)
    })
})
app.post("/funcionarios", (request, response) => { // cadastro do funcionario -> validação da existencia do funcionario
    const {nome, cargo, data_contratacao, salario, email} = request.body
    // validação
    if(!nome){
        response.status(400).json({message: "O nome é obrigatorio"})
        return
    }
    if(!cargo){
        response.status(400).json({message: "O cargo é obrigatorio"})
        return
    }
    if(!data_contratacao){
        response.status(400).json({message: "A data de contratação é obrigatorio"})
        return
    }
    if(!salario){
        response.status(400).json({message: "O salario é obrigatorio"})
        return
    }
    if(!email){
        response.status(400).json({message: "O email é obrigatorio"})
        return
    }
    const checkSql = /*sql*/ `SELECT * FROM funcionarios WHERE nome = "${nome}"
    AND cargo = "${cargo}" AND data_contratacao = "${data_contratacao}" AND salario = "${salario}" AND email = "${email}"`

    conn.query(checkSql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar os funcionarios"})
            return console.log(err)
        }
        if(data.length > 0){
            response.status(409).json({message: "Funcionario já existe na livraria"})
            return console.log(err)
        }
        const id = uuidv4()

        const insertSql = /*sql*/ `INSERT INTO funcionarios
        (id, nome, cargo, data_contratacao, salario, email)
        VALUES ("${id}", "${nome}", "${cargo}", "${data_contratacao}", "${salario}", "${email}")`

        conn.query(insertSql, (err) => {
            if(err){
                response.status(500).json({message: "Erro ao cadastrar funcionario"})
                return console.log(err)
            }
            response.status(201).json({message: "Funcionario cadastrado"})
        })
    })
})
app.get('/funcionarios/:id', (request, response) => { // listar funcionario por id
    const {id} = request.params
    const sql = /*sql*/ `SELECT * FROM funcionarios WHERE id = "${id}"`
    conn.query(sql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao buscar funcionario"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Funcionario não encontrado"})
        }
        const funcionario = data[0]
        return response.status(200).json(funcionario)
    })
})
app.put('/funcionarios/:id', (request, response) => { // atualizar funcionario
    const {id} = request.params
    const {nome, cargo, data_contratacao, salario} = request.body;
    // validação
    if(!nome){
        response.status(400).json({message: "O nome é obrigatorio"})
        return
    }
    if(!cargo){
        response.status(400).json({message: "O cargo é obrigatorio"})
        return
    }
    if(!data_contratacao){
        response.status(400).json({message: "A data de contratação é obrigatorio"})
        return
    }
    if(!salario){
        response.status(400).json({message: "O salario é obrigatorio"})
        return
    }
    const checkSql = /*sql*/ `SELECT * FROM funcionarios WHERE id = "${id}"`
    conn.query(checkSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message:"Erro ao buscar funcionario"})
        }
        if(data.length === 0){
            return response.status(404).json({message: "Funcionario não encontrado"})
        }
    })
    // consultra sql para atualizar o funcionario
    const updateSql = /*sql*/ `UPDATE funcionarios SET
    nome = "${nome}", cargo = "${cargo}", data_contratacao = "${data_contratacao}", 
    salario = "${salario}", WHERE id = "${id}" 
    `
    conn.query(updateSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message:"Erro ao buscar funcionario"})
        }
        if(data.length === 0){
            return response.status(404).json({message: "Funcionario não encontrado"})
        }
    })
})
app.delete('/funcionarios/:id', (request, response) => {
    const {id} = request.params
    const deleteSql = /*sql*/ `DELETE FROM funcionarios WHERE id = "${id}"`
    conn.query(deleteSql, (err, info) => {
        if(err){
            response.status(500).json({message: "Erro ao deletar funcionario"})
            return
        }
        if(info.affectedRows === 0){
            response.status(404).json({message: "Funcionario não encontrado"})
            return 
        }
        response.status(200).json({message: "Funcionario selecionado foi deletado"})
    })
})

app.use((request, response) => { //  rota não encontrada
    response.status(404).json({message: "Rota não encontrada"})
})
