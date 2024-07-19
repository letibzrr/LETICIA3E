import "dotenv/config"
import express, { request, response } from "express"
// conexão com o banco de dados
import conn from "./config/conn.js"
//importação dos modulos e criação das tabela
import "./models/livroModel.js"
import "./models/funcionarioModel.js"

const PORT = process.env.PORT;
const app = express();

app.get('/', (request, response) => {
    response.send('Hello Word')
});
app.listen(PORT, () => {
    console.log("Servidor on Port "+PORT);
});