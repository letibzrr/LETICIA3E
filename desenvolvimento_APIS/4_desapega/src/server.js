import "dotenv/config"
import express from "express"
import path from "node:path"
import { fileURLToPath } from "node:url"

import conn from './config/conn.js' //importar conexão 

import usuarioRouter from "./routes/usuarioRoutes.js" //importar a rota de usuarios
import "./models/usuarioModel.js" //importação da tabela de usuarios

const PORT = process.env.PORT 
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use("/public", express.static(path.join(__dirname,"public"))) //localizar a pasta public

app.use('/usuarios', usuarioRouter) //utilizando a rota de usuarios

app.use((request, response) => {
    response.status(404).json({message: 'Recurso Indisponível'})
})
app.listen(PORT , () => {
    console.log("Servidor o PORT "+PORT)
})