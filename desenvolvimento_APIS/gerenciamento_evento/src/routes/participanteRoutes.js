import { Router } from "express";
import { registrar, inscrever } from "../controllers/participanteController.js" 

//HELPERS
import validarParticipante from "../helpers/validar-participante.js"
//ROTAS
const router = Router();

router.post("/participantes/registrar", validarParticipante, registrar)
router.post("/inscrever", inscrever)

export default router;