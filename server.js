const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Client } = require('pg');

// Parametros de ambiente vindos do .env
dotenv.config();

// Configuração de ambiente para express
const app = express();
const PORT = process.env.PORT;
app.use(cors());

// Conectar o banco de dados
//const db = require('./src/controllers/db')

// Inicia servidor na porta definida
app.listen(PORT, function() {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('🚀 API rodando com sucesso e com deploy automático!')
});