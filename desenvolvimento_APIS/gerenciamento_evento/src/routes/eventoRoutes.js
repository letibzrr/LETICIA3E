import { Router } from "express";
import { create, agenda } from "../controllers/eventoController.js" 

//HELPERS

//ROTAS
const router = Router();

router.post("/criar", create)
router.get("/agenda", agenda)

export default router;