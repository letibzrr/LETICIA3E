import { Router } from "express";
import { create, getAllPalestrante } from "../controllers/palestranteController.js" 

//HELPERS
import validarPalestrante from "../helpers/validar-palestrante.js"

//ROTAS
const router = Router();

router.post("/palestrantes/create", validarPalestrante, create)
router.get("/palestrantes/getAllPalestrante", getAllPalestrante)


export default router;