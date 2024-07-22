// controlar as funções da tabela de livros 
import { request, response } from "express";
import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid';
// exportação e criação das rotas
export const getLivros = (request, response) => {
    const sql = `SELECT * FROM livros`
    conn.query(sql, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar livros"})
            return ;
        }
        const livros = data
        response.status(200).json(livros);
    });
};
export const cadastrarLivro = (request, response) => {
    const {titulo, autor, ano_publicacao, genero, preco} = request.body
    // validação
    if(!titulo){
        response.status(400).json({message: "O titulo é obrigatorio"})
        return
    }
    if(!autor){
        response.status(400).json({message: "O autor é obrigatorio"})
        return
    }
    if(!ano_publicacao){
        response.status(400).json({message: "O ano de publicação é obrigatorio"})
        return
    }
    if(!genero){
        response.status(400).json({message: "O genero é obrigatorio"})
        return
    }
    if(!preco){
        response.status(400).json({message: "O preço é obrigatorio"})
        return
    }

    // cadastro do livro
    const checkSql = /*sql*/ `SELECT * FROM livros WHERE ?? = ? AND ?? = ? AND ?? = ?` // as ?? são referencia as variaveis do checkSqlData
    const checkSqlData = ["titulo", titulo, "autor", autor, "ano_publicacao", ano_publicacao] // segurança do banco de dados, escondendo as variaveis

    conn.query(checkSql, checkSqlData, (err, data) => {
        if(err){
            response.status(500).json({message: "Erro ao buscar os livros"})
            return console.log(err)
        }
        if(data.length > 0){
            response.status(409).json({message: "Livro já existe na livraria"})
            return console.log(err)
        }
        const id = uuidv4()
        const disponibilidade = 1

        const insertSql = /*sql*/ `INSERT INTO livros (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)` // as ?? são referencia as variaveis do insertData

        const insertData = ["livro_id", "titulo", "autor", "ano_publicacao", "genero", "preco", "disponibilidade",
        id, titulo, autor, ano_publicacao, genero, preco, disponibilidade] // segurança do banco de dados, escondendo as variaveis

        conn.query(insertSql, insertData, (err) => {
            if(err){
                response.status(500).json({message: "Erro ao cadastrar livro"})
                return console.log(err)
            }
            response.status(201).json({message: "Livro cadastrado"})
        })
    })
};
export const buscarLivro = (request, response) => {
    const {id} = request.params
    const sql = /*sql*/ `SELECT * FROM livros WHERE id = "${id}"`
    conn.query(sql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao buscar livro"})
            return
        }
        if(data.length === 0){
            response.status(404).json({message: "Livro não encontrado"})
        }
        const livro = data[0]
        return response.status(200).json(livro)
    })
};
export const atualizarLivro = (request, response) => {
    const {id} = request.params
    const {titulo, autor, ano_publicacao, genero, preco, disponibilidade} = request.body;
    // validação
    if(!titulo){
        response.status(400).json({message: "O titulo é obrigatorio"})
        return
    }
    if(!autor){
        response.status(400).json({message: "O autor é obrigatorio"})
        return
    }
    if(!ano_publicacao){
        response.status(400).json({message: "O ano de publicação é obrigatorio"})
        return
    }
    if(!genero){
        response.status(400).json({message: "O genero é obrigatorio"})
        return
    }
    if(!preco){
        response.status(400).json({message: "O preço é obrigatorio"})
        return
    }
    if(disponibilidade === undefined){
        response.status(400).json({message: "O disponibilidade é obrigatorio"})
        return
    }
    const checkSql = /*sql*/ `SELECT * FROM livros WHERE id = "${id}"`
    conn.query(checkSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message:"Erro ao buscar livro"})
        }
        if(data.length === 0){
            return response.status(404).json({message: "Livro não encontrado"})
        }
    })
    // consultra sql para atualizar o livro
    const updateSql = /*sql*/ `UPDATE livros SET
    titulo = "${titulo}", autor = "${autor}", ano_publicacao = "${ano_publicacao}", 
    genero = "${genero}", preco = "${preco}", disponibilidade = "${disponibilidade}"
    WHERE id = "${id}" 
    `
    conn.query(updateSql, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({message:"Erro ao buscar livro"})
        }
        if(data.length === 0){
            return response.status(404).json({message: "Livro não encontrado"})
        }
    })
};
export const deletarLivro = (request, response) => {
    const {id} = request.params
    const deleteSql = /*sql*/ `DELETE FROM livros WHERE id = "${id}"`
    conn.query(deleteSql, (err, info) => {
        if(err){
            response.status(500).json({message: "Erro ao deletar livro"})
            return
        }
        if(info.affectedRows === 0){
            response.status(404).json({message: "Livro não encontrado"})
            return 
        }
        response.status(200).json({message: "Livro selecionado foi deletado"})
    })
};