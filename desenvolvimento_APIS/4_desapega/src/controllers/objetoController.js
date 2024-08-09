import conn from "../config/conn.js"
import { v4 as uuidv4 } from "uuid"
import getToken from "../helpers/get-token.js"
import getUserByToken from "../helpers/get-user-by-token.js"

export const create = async (request, response) => {
    const {nome, peso, cor, descricao} = request.body
    const disponivel = 1

    //buscar token => usuario cadastrado
    const token = getToken(request)
    const user = await getUserByToken(token)

    if(!nome){
        return response.status(400).json({message: "O nome do objeto é obrigatório"})
    }
    if(!peso){
        return response.status(400).json({message: "O peso do objeto é obrigatório"})
    }
    if(!cor){
        return response.status(400).json({message: "A cor do objeto é obrigatória"})
    }
    if(!descricao){
        return response.status(400).json({message: "A descrição do objeto é obrigatória"})
    }
    const objeto_id = uuidv4()
    const usuario_id = user.usuario_id

    const insertSql = /*sql*/ `INSERT INTO objetos(??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)`
    const insertData = ["objeto_id", "nome", "peso", "cor", "descricao", "disponivel", "usuario_id", objeto_id, nome, peso, cor, descricao, disponivel, usuario_id]

    conn.query(insertSql, insertData, (err, data) => {
        if(err){
            console.error(err)
            return response.status(500).json({err: "Erro ao cadastrar objeto"})
        }
        if(request.files){
            //cadastrar no banco
            const insertImageSql = /*sql*/ `INSERT INTO objetos_imagens(imagem_id, objeto_id, imagem_path) VALUES ?`
            const imageValues = request.files.map((file) => [uuidv4(), objeto_id, file.filename])

            conn.query(insertImageSql, [imageValues], (err) => {
                if(err){
                    console.error(err)
                    return response.status(500).json({err: "Erro ao salvar imagens do objeto"})
                }
                return response.status(201).json({message: "Objeto cadastrado com sucesso"})
            })
        }else{
            return response.status(201).json({message: "Objeto cadastrado com sucesso"})
        }
    })
}
export const getAllObjetcUser = async(request, response) => {
    try {
        const token = getToken(request)
        const user = await getUserByToken(token)
        const usuarioId = user.usuario_id

        const selectSql = /*sql*/ `SELECT obj.objeto_id, obj.usuario_id, obj.nome, obj.peso, obj.cor, obj.descricao,
        GROUP_CONCAT(obj_img.imagem_path SEPARATOR ',') AS imagem_path
        FROM objetos AS obj
        LEFT JOIN objetos_imagens AS obj_img ON obj.objeto_id = obj_img.objeto_id
        WHERE obj.usuario_id = ?
        GROUP BY obj.objeto_id, obj.usuario_id, obj.usuario_id, obj.nome, obj.peso, obj.cor, obj.descricao`

        conn.query(selectSql, [usuarioId], (err, data) => {
            if(err){
                console.error(err)
                return response.status(500).json({err: "Erro ao buscar objeto"})
            }
            const objetosUsuario = data.map((objeto) => ({
                objeto_id: objeto.objeto_id,
                usuario_id: objeto.usuario_id,
                nome: objeto.nome,
                cor: objeto.cor,
                descricao: objeto.descricao,
                imagem_path: objeto.imagem_path.split(",")
            }))
            return response.status(200).json(objetosUsuario)
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({err: "Erro ao processar a requisição"})
    }
}
export const getObjetcById = (request, response) => {
    const {id} = request.params
    const checkSql = /*sql*/ `
        SELECT objeto_id, usuario_id, nome, peso, cor, descricao, disponivel FROM objetos WHERE ?? = ? 
    `
    const checkData = ["objeto_id", id]
    conn.query(checkSql, checkData, (err, data) => {
        if(err){
            console.error(err)
            response.status(500).json({err: "Erro ao buscar objeto"})
            return
        }
        if(data.length === 0){
            response.status(404).json({err: "Objeto não encontrado"})
            return
        }
        const objeto = data[0]
        response.status(200).json(objeto)
    })
} 
// simulaçãob de redeb social
// cadastrar
// curtir a publicação um do outro
// registrar