import express from 'express';
import cors from 'cors';
import app from '../app.js';

// Habilita CORS para todos os domínios
app.use(cors());

const PORT = process.env.PORT || 8080; // Railway usa 8080
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
