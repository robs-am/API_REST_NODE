import http from 'http';
import express from 'express';
import apiRouter from './api-v1/api-router';

const app = express();

//app.get('/', (req, res, next) => res.send(''));
app.get('/doc', (req, res, next) => res.send('Docs'));

app.use('/api/v1', apiRouter);
app.use('/', (req, res) => res.send('API Contatos'));

const porta = 5500;
http
  .createServer(app)
  .listen(porta, () => console.log(`Servidor pronto na porta ${porta}`));
