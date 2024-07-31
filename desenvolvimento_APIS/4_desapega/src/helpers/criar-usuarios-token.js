import jwt from "jsonwebtoken"

const createUserToken = async (usuario, request, response) => {
    // criar o token
    const token = jwt.sign( // sign => metodo de criptografia do token
        {
            nome:usuario.nome,
            id: usuario.usuario_id
        },
        "SENHASUPERSEGURAEDIFICIL" // senha para criptografia
    )
    // retornar o token
    response.status(200).json({
        message : "Você está logado!",
        token : token,
        usuarioID : usuario.usuario_id
    })
}

export default createUserToken;