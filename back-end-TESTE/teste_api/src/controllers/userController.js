import User from "../models/userModel.js";
import { z } from "zod";
import formatZodError from "../helpers/formatZodError.js";
import bcrypt from "bcrypt";

// VALIDAÇÕES COM ZOD
const createSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
});

export const register = async (request, response) => {
  // IMPLEMENTAÇÃO DO ZOD
  const bodyValidation = createSchema.safeParse(request.body);
  if (!bodyValidation.success) {
    return response.status(400).json({
      message: "Os dados recebidos do corpo da requisição são inválidos",
      detalhes: formatZodError(bodyValidation.error),
    });
  }

  try {
    const { name, email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return response.status(201).json({ message: "Usuário registrado com sucesso", user: newUser });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
};

export const login = async (request, response) => {
  // IMPLEMENTAÇÃO DO ZOD
  const bodyValidation = loginSchema.safeParse(request.body);
  if (!bodyValidation.success) {
    return response.status(400).json({
      message: "Os dados recebidos do corpo da requisição são inválidos",
      detalhes: formatZodError(bodyValidation.error),
    });
  }

  try {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return response.status(404).json({ message: "Usuário não encontrado" });
    }

    const passwordOK = await bcrypt.compare(password, user.password);
    if (!passwordOK) {
      return response.status(401).json({ message: "Senha incorreta" });
    }

    return response.status(200).json({ message: "Login realizado com sucesso" });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
};

export const list = async (request, response) => {
  try {
    const users = await User.findAll();
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
