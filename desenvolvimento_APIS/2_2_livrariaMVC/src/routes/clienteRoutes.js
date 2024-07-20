// criação das rotas sobre tabela clientes
import { Router } from "express";
// import controllers
import { getClientes, cadastrarCliente, buscarCliente, atualizarCliente } from "../controllers/clientesController.js"

const router = Router();
router.get("/", getClientes);
router.post("/cadastrar", cadastrarCliente); 
router.get("/:id", buscarCliente); 
router.put("/atualizar/:id", atualizarCliente);

export default router;