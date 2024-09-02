import { request, response } from "express"
import { json } from "sequelize"
import Tarefa from "../models/tarefaModel.js"

export const create = async (request, response) => { // RF01
    const {tarefa, descricao} = request.body
    const status = "pendente"

    if(!tarefa){
        return response.status(400).json({err: "A tarefa é obrigatória"})
    }
    if(!descricao){
        return response.status(400).json({err: "A descrição é obrigatória"})
    }

    const novaTarefa = {
        tarefa,
        descricao,
        status
    }
    try {
        await Tarefa.create(novaTarefa)
        response.status(201).json({message: "Tarefa Cadastrada"})
    } catch (error) {
        response.status(500).json({message: "Erro ao cadastrar tarefa"})
    }
}

export const getAll = async (request, response) => { // RF02
    // tarefas?page=1&limit=10
    const page = parseInt(request.query.page) || 1
    const limit = parseInt(request.query.limit) || 10
    const offset = (page - 1) * limit

    try {
        const tarefas = await Tarefa.findAndCountAll({
            limit,
            offset
        })
        //console.log(page, limit, offset)
        //console.log(tarefas)
        const totalPaginas = Math.ceil(tarefas.count / limit);
        response.status(200).json({
            totalTarefas: tarefas.count,
            totalPaginas,
            paginaAtual: page,
            itemsPorPagina: limit,
            proximaPagina: totalPaginas === 0 ? null : `http://localhost:3333/tarefas?page=${page + 1}`,
            tarefas: tarefas.rows
        })
    } catch (error) {
        response.status(500).json({message: "Erro ao buscar tarefas"})
    }
}

export const getTarefa = async (request, response) => { // RF03
    const {id} = request.params
    try {
        //const tarefas = await Tarefa.findOne({ where: { id } })
        const tarefas = await Tarefa.findByPk(id) 
        if(tarefas === null){
            return response.status(404).json({message: "Tarefa Não Encontrada"})
        }
        response.status(200).json(tarefas)
    } catch (error) {
        response.status(500).json({message: "Erro ao buscar tarefa"})
    }
}

export const updateTarefa = async (request, response) => { // RF04
    const { id } = request.params
    const { tarefa, descricao, status } = request.body

    if(!tarefa){
        return response.status(400).json({message: "A tarefa é obrigatória"})
    }
    if(!descricao){
        return response.status(400).json({message: "A descrição é obrigatória"})
    }
    if(!status){
        return response.status(400).json({message: "O status é obrigatório"})
    }

    const tarefaAtualizada = {
        tarefa,
        descricao,
        status
    }

    try {
        const [linhasAfetadas] = await Tarefa.update(tarefaAtualizada, { where: { id } });
        if(linhasAfetadas <= 0){ // em caso de id não existente ou descrito errado
            return response.status(404).json({message: "Tarefa Não Encontrada"})
        }
        response.status(200).json({message: "Tarefa Atualizada"})
    } catch (error) {
        response.status(500).json({message: "Erro ao atualizar tarefa"})
    }
}

export const updateStatus = async (request, response) => { // RF05
    const { id } = request.params;

    try {
        const tarefa = await Tarefa.findOne({ raw: true, where: { id } })
        if(tarefa === null){
            return response.status(404).json({message: "Tarefa não encontrada"})
        }
        if(tarefa.status === "pendente"){
            await Tarefa.update({ status: "concluida" }, { where: { id }})
        }else if(tarefa.status === "concluida"){
            await Tarefa.update({ status: "pendente" }, { where: { id }})
        }
        const tarefaAtualizada = await Tarefa.findOne({ raw: true, where: { id } })
        response.status(200).json(tarefaAtualizada)
    } catch (error){
        response.status(500).json({message: "Erro ao atualizar a tarefa"})
    }
}
