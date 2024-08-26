import "dotenv/config";
import express, { request, response } from "express";
import cors from "cors";

// IMPORTAÇÃO DE CONEXÃO DO BANCO DE DADOS
import conn from "./config/conn.js";

// IMPORTAÇÃO DE MODELOS
import Tarefa from "./models/tarefaModel.js";

// IMPORTAÇÃO DAS ROTAS
import tarefaRouter from "./routes/tarefaRouter.js"

const PORT = process.env.PORT || 3333
const app = express()

// 3 middlewares
app.use(cors()) // cors
app.use(express.urlencoded({extended: true})) //arquivos 
app.use(express.json()) // json

// CONEXÃO COM O BANCO
conn
.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor on http://localhost:${PORT}`)
    })
}).catch((error) => console.error(error)); 

// UTILIZAÇÃO DAS ROTAS
app.use("/tarefas", tarefaRouter)

app.use((request, response) => {
    response.status(404).json({message: "Rota não encontrada"})
})

