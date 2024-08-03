import { Router } from "express";
import { create, getAllObjetcUser } from "../controllers/objetoController.js"

//helpers
import verificarToken from "../helpers/verify-token.js";
import imageUpload from "../helpers/image-upload.js";

//rotas
const router = Router()
router.post("/create", verificarToken, imageUpload.array("imagens", 10), create)
//listar todos os objetos
//listar todas as imagens de um objeto
//listar todas as imagens que pertecem a um usuario
//resgatar objeto pelo id
router.get("/usuarios/imagens", verificarToken, getAllObjetcUser)

export default router;