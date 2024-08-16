import { Router } from "express";
import { feedback } from "../controllers/eventoFeedbackController.js" 

//HELPERS

//ROTAS
const router = Router();

router.post("/feedback", feedback)

export default router;