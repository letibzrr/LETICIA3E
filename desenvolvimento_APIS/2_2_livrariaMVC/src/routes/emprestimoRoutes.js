// criação das rotas sobre tabela emprestimos
import { Router } from "express";
// import controllers
import { getEmprestimos, cadastrarEmprestimos} from "../controllers/emprestimosController.js"
const router = Router();
router.get("/", getEmprestimos);
router.post("/cadastrar", cadastrarEmprestimos); 

export default router;