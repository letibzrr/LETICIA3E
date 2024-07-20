// criação das rotas sobre tabela livros
import { Router } from "express";
// import controllers
import { getLivros, cadastrarLivro, buscarLivro, atualizarLivro, deletarLivro  } from "../controllers/livrosController.js"

const router = Router();
router.get("/", getLivros);
router.post("/cadastrar", cadastrarLivro); 
router.get("/:id", buscarLivro); 
router.put("/atualizar/:id", atualizarLivro);
router.delete("/deletar/:id", deletarLivro);
export default router;