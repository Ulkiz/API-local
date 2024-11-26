const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Permite requisições de qualquer origem
app.use(cors());

// Permite o servidor receber e enviar JSON
app.use(express.json());

let pets = []; //pets sendo armazenados na memoria

// Rota POST para salvar um pet
app.post('/api/pets', (req, res) => {
  const pet = req.body;
  pets.push(pet); 
  res.status(201).json(pet);
});

//GET para buscar os pets
app.get('/api/pets', (req, res) => {
  res.json(pets);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
