import { Router } from "express";
// import controllers
import { getMotorista, cadastrarMotorista, buscarMotorista, deletarMotorista } from "../controllers/motoristaBusController.js"

const router = Router();
router.get("/", getMotorista);
router.post("/cadastrar", cadastrarMotorista); 
router.get("/:id", buscarMotorista); 
router.put("/deletar/:id", deletarMotorista);
export default router;