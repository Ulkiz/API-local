const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Permite requisições de qualquer origem
app.use(cors());

// Permite o servidor receber e enviar JSON
app.use(express.json());

let pets = []; // Aqui estamos armazenando os pets na memória (não em banco de dados)

// Rota POST para salvar um pet
app.post('/api/pets', (req, res) => {
  const pet = req.body; // Pet recebido no corpo da requisição
  pets.push(pet); // Adiciona o pet ao array (ou banco de dados)
  res.status(201).json(pet); // Retorna o pet adicionado com status 201
});

// Rota GET para buscar os pets
app.get('/api/pets', (req, res) => {
  res.json(pets);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
