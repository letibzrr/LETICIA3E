import { request, response, Router } from "express";

import { register } from "../controllers/usuarioController.js" //importar controllers 

import validarUsuario from "../helpers/validar-usuario.js"

const router = Router();

router.post("/register", validarUsuario, register)

export default router;