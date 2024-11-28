import express from 'express';

const apiRouter = express.Router();

apiRouter.use('/', (req, res, next) => res.send('API versão 1'));

export default apiRouter;
