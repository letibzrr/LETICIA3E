import { request, response, Router } from "express";

import { register, login, checkUser } from "../controllers/usuarioController.js" //importar controllers 

import validarUsuario from "../helpers/validar-usuario.js"

const router = Router();

router.post("/register", validarUsuario, register)
router.post("/login", login)
router.get("/:id", checkUser)

export default router;