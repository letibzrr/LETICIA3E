import { register, login, list } from "../controllers/userController.js";
import express from "express";
import User from "../models/userModel.js";
import conn from '../config/conn.js';
import request from 'supertest'; 
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';

jest.mock('../config/conn.js', () => {
  const mockUserModel = {
    findOne: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    destroy: jest.fn(),
    truncate: jest.fn(),
  };

  return {
    models: {
      User: mockUserModel,
    },
    define: jest.fn(),
    close: jest.fn(),
  };
});

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.post('/register', register);
app.post('/login', login);
app.get('/list', list);

afterEach(() => {
  jest.clearAllMocks();
});

test("Consegue criar um novo usuário corretamente", async () => {

  conn.models.User.create.mockResolvedValue({
    id: 1,
    name: 'test',
    email: 'test@test.com',
    password: '12345678',
  });

  const response = await request(app)
    .post('/register')
    .send({
      name: 'test',
      email: 'test@test.com',
      password: '12345678',
    });

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty('message', 'Usuário registrado com sucesso');
});

test("Não criar um usuário com um email existente", async () => {
  const email = 'test@test.com';

  conn.models.User.findOne.mockResolvedValue({ email });

  const response = await request(app)
    .post('/register')
    .send({
      name: 'test',
      email,
      password: '12345678',
    });

  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty('message', 'Os dados recebidos do corpo da requisição são inválidos');
});

test("Consegue encontrar um usuário pelo email", async () => {
  const email = 'test@test.com';
  conn.models.User.findOne.mockResolvedValue({
    id: 1,
    name: 'test',
    email,
    password: 'hashedpassword',
  });

  const response = await request(app)
    .post('/login')
    .send({
      email,
      password: '12345678',
    });

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Login realizado com sucesso');
});

test("A senha enviada combina com a senha no banco de dados", async () => {
  const email = 'test@test.com';
  const hashedPassword = await bcrypt.hash('12345678', 10);
  
  conn.models.User.findOne.mockResolvedValue({
    id: 1,
    name: 'test',
    email,
    password: hashedPassword,
  });

  const response = await request(app)
    .post('/login')
    .send({
      email,
      password: '12345678',
    });

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Login realizado com sucesso');
});

test("Mandando uma senha errada, seu programa não combina com a senha no banco de dados", async () => {
  const email = 'test@test.com';
  const hashedPassword = await bcrypt.hash('12345678', 10);

  conn.models.User.findOne.mockResolvedValue({
    id: 1,
    name: 'test',
    email,
    password: hashedPassword,
  });

  const response = await request(app)
    .post('/login')
    .send({
      email,
      password: 'wrongpassword',
    });

  expect(response.status).toBe(401);
  expect(response.body).toHaveProperty('message', 'Senha incorreta');
});

test("Consegue listar todos os usuários", async () => {

  conn.models.User.findAll.mockResolvedValue([
    { id: 1, name: 'test1', email: 'test1@test.com' },
    { id: 2, name: 'test2', email: 'test2@test.com' }
  ]);

  const response = await request(app)
    .get('/list');

  expect(response.status).toBe(200);
  expect(response.body.length).toBe(2);
  expect(response.body[0]).toHaveProperty('email', 'test1@test.com');
  expect(response.body[1]).toHaveProperty('email', 'test2@test.com');
});
