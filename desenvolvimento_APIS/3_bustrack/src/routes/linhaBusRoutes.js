import { Router } from "express";
// import controllers
import { getLinhas, cadastrarLinhas, buscarLinha, atualizarLinha } from "../controllers/linhasBusController.js"

const router = Router();
router.get("/", getLinhas);
router.post("/cadastrar", cadastrarLinhas); 
router.get("/:id", buscarLinha); 
router.put("/atualizar/:linha_id", atualizarLinha);

export default router;