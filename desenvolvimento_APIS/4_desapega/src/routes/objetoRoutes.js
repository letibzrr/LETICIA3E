import { Router } from "express";
import { create, getAllObjetcUser, getObjetcById } from "../controllers/objetoController.js"

//helpers
import verificarToken from "../helpers/verify-token.js";
import imageUpload from "../helpers/image-upload.js";

//rotas
const router = Router()
router.post("/create", verificarToken, imageUpload.array("imagens", 10), create)
//listar todas as imagens de um objeto
//listar todas as imagens que pertecem a um usuario
router.get("/usuarios/imagens", verificarToken, getAllObjetcUser)
router.get("/:id", getObjetcById)

export default router;