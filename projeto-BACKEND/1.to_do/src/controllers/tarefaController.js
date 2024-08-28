import Tarefa from "../models/tarefaModel.js"

export const create = async (request, response) => {
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