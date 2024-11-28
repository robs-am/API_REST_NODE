import express from 'express';

const pessoaRouter = express.Router();

pessoaRouter.use('/', (req, res, next) => res.send('Endpoint Pessoa'));

export default pessoaRouter;
