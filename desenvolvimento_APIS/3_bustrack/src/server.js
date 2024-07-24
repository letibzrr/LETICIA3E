// todas as configurações do software
import "dotenv/config"
import express from "express"
// conexão com o banco de dados
import conn from "./config/conn.js"
// importação dos modulos e criação das tabela
import "./models/onibusModel.js"
import "./models/motoristaBusModel.js"
import "./models/linhaBusModel.js"
// importação das rotas
import linhaRoutes from "./routes/linhaBusRoutes.js"
import motoristaRoutes from "./routes/motoristaBusRoutes.js"
import onibusRoutes from "./routes/onibusRoutes.js"
// chamando a porta em arquivo env
const PORT = process.env.PORT;

const app = express();
// leitura de informações em json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// utilização das rotas
app.use('/linhas', linhaRoutes);
app.use('/motoristas', motoristaRoutes);
app.use('/onibus', onibusRoutes);

app.get('/', (request, response) => {
    response.send('Hello Word');
});
app.listen(PORT, () => {
    console.log("Servidor on Port "+PORT);
});
 