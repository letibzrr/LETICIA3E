
const validarParticipante = (request, response, next) => {
    const {nome, email} = request.body

    if(!nome){
        response.status(400).json({message: "O nome é obrigatório"})
        return
    }
    if(!email){
        response.status(400).json({message: "O email é obrigatório"})
        return
    }
    if(!email.includes('@')){
        response.status(409).json({message: "Formato de email inválido"})
        return
    }
    next()
};

export default validarParticipante;