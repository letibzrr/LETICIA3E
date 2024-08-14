import jwt from "jsonwebtoken"

const createPalestranteToken = async (palestrante, request, response) => {
    // criar o token
    const token = jwt.sign( // sign => metodo de criptografia do token
        {
            nome:palestrante.nome,
            id: palestrante.palestrante_id
        },
        "SENHASUPERSEGURAEDIFICILPALESTRANTE" // senha para criptografia
    )
    // retornar o token
    response.status(200).json({
        message : "Você está logado!",
        token : token,
        palestranteId : palestrante.palestrante_id
    })
}

export default createPalestranteToken;