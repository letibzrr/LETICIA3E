import { Sequelize } from "sequelize";

const conn = new Sequelize ("ToDo", "root", "Sen@iDev77!.", {
    host:"localhost",
    dialect: "mysql"
})

// TESTE DE CONEXÃO COM O BANCO DE DADOS
// try{
//     await conn.authenticate();
//     console.log('Connection MYSQL');
// } catch (error) {
//     console.error('Error:', error);
// }

export default conn;