import { Router } from "express";
import { create, agenda, editar, cancelar } from "../controllers/eventoController.js" 

//HELPERS

//ROTAS
const router = Router();

router.post("/criar", create)
router.get("/agenda", agenda)
router.put("/editar/:id", editar)
router.delete("/cancelar/:id", cancelar)

export default router;