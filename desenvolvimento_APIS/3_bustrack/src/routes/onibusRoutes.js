import { Router } from "express";
// import controllers
import { getonibus, cadastrarOnibus, buscarOnibus } from "../controllers/onibusController.js"

const router = Router();
router.get("/", getonibus);
router.post("/cadastrar", cadastrarOnibus); 
router.get("/:id", buscarOnibus); 
export default router;