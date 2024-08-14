import jwt from "jsonwebtoken"

const createParticipanteToken = async (participante, request, response) => {
    // criar o token
    const token = jwt.sign( // sign => metodo de criptografia do token
        {
            nome:participante.nome,
            id: participante.participante_id
        },
        "SENHASUPERSEGURAEDIFICILPARTICIPANTE" // senha para criptografia
    )
    // retornar o token
    response.status(200).json({
        message : "Você está logado!",
        token : token,
        participanteId : participante.participante_id
    })
}

export default createParticipanteToken;