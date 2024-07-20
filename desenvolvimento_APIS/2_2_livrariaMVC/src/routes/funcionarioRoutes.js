// criação das rotas sobre tabela funcionarios
import { Router } from "express";
// import controllers
import { getFuncionarios, cadastrarFuncionario, buscarFuncionario, atualizarFuncionario, deletarFuncionario  } from "../controllers/funcionariosController.js"

const router = Router();
router.get("/", getFuncionarios);
router.post("/cadastrar", cadastrarFuncionario); 
router.get("/:id", buscarFuncionario); 
router.put("/atualizar/:id", atualizarFuncionario);
router.delete("/deletar/:id", deletarFuncionario);
export default router;

