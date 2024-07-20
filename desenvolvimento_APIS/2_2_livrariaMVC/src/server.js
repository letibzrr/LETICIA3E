// todas as configurações do software
import "dotenv/config"
import express from "express"
// conexão com o banco de dados
import conn from "./config/conn.js"
// importação dos modulos e criação das tabela
import "./models/livroModel.js"
import "./models/funcionarioModel.js"
// importação das rotas
import livrosRouter from "./routes/livroRoutes.js"
import funcionariosRoutes from "./routes/funcionarioRoutes.js"
// chamando a porta em arquivo env
const PORT = process.env.PORT;

const app = express();
// leitura de informações em json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// utilização das rotas
app.use('/livros', livrosRouter);
app.use('/funcionarios', funcionariosRoutes);

app.get('/', (request, response) => {
    response.send('Hello Word');
});
app.listen(PORT, () => {
    console.log("Servidor on Port "+PORT);
});