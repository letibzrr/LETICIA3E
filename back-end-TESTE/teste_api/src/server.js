import "dotenv/config"
import express, { request, response } from "express"

import conn from "./config/conn.js"

import User from "./models/userModel.js"
import userRouter from "./routes/userRouter.js"

const PORT = process.env.PORT || 3333
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

conn
.sync({ force: true})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor on http://localhost:${PORT}`)
    })
}).catch((error) => console.error(error)); 

app.use("/user", userRouter)

app.use((request, response) => {
    response.status(404).json({message: "Rota não encontrada"})
})