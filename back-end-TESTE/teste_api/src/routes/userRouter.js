import { Router } from "express";
import { register, login, list } from "../controllers/userController.js"

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/list", list);

export default router;