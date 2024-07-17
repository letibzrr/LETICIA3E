import express from "express"
import { v4 as uuidv4 } from "uuid";
const PORT = 3333 // porta da api
const app =  express() // função => receber todos os dados do express
app.use(express.json()) // aceita json como transferencia de dados, body params

// rotas
/** Request HTTP 
 * query params --> ...:3333/people?name="Lua"&age=17
 *  Rotas do tipo GET (filtros e buscas especificas)
 * route params --> ...:3333/people/5
 *  Rotas do tipo GET, PUT, PATCH, DELETE (listar um elemento)
 * body params --> ...:3333/people
 *  Rotas do tipo POST (cadastro de informações)
*/
//Sen@iDev77!.
//Middleware
const logRoutes = (request, response, next) => {
    const { url, method } = request
    const rota = `[${method.toUpperCase()}] ${url}`
    console.log(rota) // [GET] /users?name=Lua&age=17
    next()
}
app.use(logRoutes) // Middleware para todas as rotas

const users = []

app.get("/users", (request, response) => { // requerimento e resposta
    const {name, age} = request.query 
    console.log(name, age)
    response.status(200).json(users) // tipo de status, retorno 
})
app.post("/users", (request, response) => { // requerimento e resposta
    const {name, age} = request.body 
       // validação
       if(!name){
        response.status(400).json({message: "o nome é obrigatório"})
        return
        }
        if(!age){
            response.status(400).json({message: "a idade é obrigatório"})
            return
        }
        const user = {
            id: uuidv4(),
            name,
            age
        }
        users.push(user)

    response.status(200).json(user)  // tipo de status, retorno 
})
app.put("/users/:id", (request, response) => { // requerimento e resposta
    const {id} = request.params;
    const {name, age} = request.body

    const indexUser = users.findIndex((user)=> user.id == id)
    if(indexUser === -1){
        response.status(404).json({message:"Usuário não encontrado"})
        return
    }
    if(!name || !age){
        response.status(400). json({message: "O nome e idade são campos obrigatórios"})
        return
    }

    const updatedUser = {
        id, 
        name, 
        age
    }

    users[indexUser]= updatedUser
    response.status(200).json(updatedUser)
    
})

app.delete("/users/:id", (request, response) => { // requerimento e resposta
    const id = request.params.id
    const indexUser = users.findIndex((user) => user.id == id)
    if(indexUser === -1){
        response.status(404).json({message: "Usuario não encontrado"})
        return
    }
    users.splice(indexUser, 1)
    response.status(204).send("Deletado")
})
app.listen(PORT, () => {
    console.log("Servidor on PORT "+PORT) //execução da porta
})