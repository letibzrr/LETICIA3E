import "dotenv/config"
import express from "express"
import path from "node:path"
import { fileURLToPath } from "node:url"
import cors from "cors";

import conn from './config/conn.js' //importar conexão 

import usuarioRouter from "./routes/usuarioRoutes.js" //importar a rota de usuarios
import objetoRouter from "./routes/objetoRoutes.js" //importar a rota de objetos
import "./models/usuarioModel.js" //importação da tabela de usuarios
import "./models/objetomodel.js" //importação da tabela de objetos
import "./models/objetoImagesModel.js" //importação da imagem do objeto

const PORT = process.env.PORT 
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/public", express.static(path.join(__dirname,"public"))) //localizar a pasta public

app.use(cors({ //cors
    origin: 'http://localhost:5372'
}))

app.use('/usuarios', usuarioRouter) //utilizando a rota de usuarios
app.use('/objetos', objetoRouter)

app.use((request, response) => {
    response.status(404).json({message: 'Recurso Indisponível'})
})
app.listen(PORT , () => {
    console.log("Servidor o PORT "+PORT)
})