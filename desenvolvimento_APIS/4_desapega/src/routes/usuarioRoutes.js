import { request, response, Router } from "express";

import { register, login, checkUser, getUserById, updateUser } from "../controllers/usuarioController.js" //importar controllers 

import validarUsuario from "../helpers/validar-usuario.js"
import verificarToken from "../helpers/verify-token.js"
import imageUpload from "../helpers/image-upload.js";

const router = Router();

router.post("/register", validarUsuario, register)
router.post("/login", login)
router.get("/checkuser", checkUser) // auxilio de front-end
router.get("/:id", getUserById)
router.put("/edit/:id", verificarToken, imageUpload.single("imagem"), updateUser)

export default router;