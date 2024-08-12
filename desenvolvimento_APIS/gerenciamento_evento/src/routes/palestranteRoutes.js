import { Router } from "express";
import { create, getAllPalestrante } from "../controllers/palestranteController.js" 

//HELPERS
import validarPalestrante from "../helpers/validar-palestrante.js"

//ROTAS
const router = Router();

router.post("/create", validarPalestrante, create)
router.get("/getAllPalestrante", getAllPalestrante)


export default router;