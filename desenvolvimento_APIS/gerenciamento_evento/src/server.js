//BIBLIOTECAS
import "dotenv/config"
import express from "express"

//MYSQL
import conn from './config/conn.js' 

//ROTAS
import palestranteRoutes from "./routes/palestranteRoutes.js"
import participanteRoutes from "./routes/participanteRoutes.js"
import eventoRoutes from "./routes/eventoRoutes.js"
import eventoFeedbackRoutes from "./routes/eventoFeedbackRoutes.js"

//TABELAS
import "./models/palestranteModel.js"
import "./models/participanteModel.js"
import "./models/eventoModel.js"
import "./models/eventoFeedbackModel.js"

const PORT = process.env.PORT 
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//UTILIZAÇÃO DE ROTAS
app.use('/eventos', palestranteRoutes)
app.use('/eventos', participanteRoutes)
app.use('/eventos', eventoRoutes)
app.use('/eventos', eventoFeedbackRoutes)

app.use((response) => {
    response.status(404).json({message: 'Recurso Indisponível'})
})
app.listen(PORT , () => {
    console.log("Servidor o PORT "+PORT)
})