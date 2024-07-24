//conexão com o banco de dados
import "dotenv/config"
import mysql from "mysql2"
const conn = mysql.createPool({ // metodo funcional sem a instrução de connect
    connectionLimit: 10, // limites de ruas ou conexão para a aplicação, evitar repetições
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});
export default conn;