// controlar as funções da tabela de emprestimos 
import { request, response } from "express";
import conn from "../config/conn.js";
// exportação e criação das rotas
export const getEmprestimos = (request, response) => {
}
export const cadastrarEmprestimos = (request, response) => {
}


// listar todos os emprestimos
// registro dos emprestimos (cliente e livro)
// validar a criação de emprestimos
// => data de emprestimos não pode anterior a data de hoje
// => data de devolução não pode ser anterior a data de emprestimo
// => data de devolução não pode ser maior que 2 semanas 

