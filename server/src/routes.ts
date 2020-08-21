import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) =>{ // essa funcao sempre recebe dois parametros, rota e uma funcao.
  return response.json({ message: 'Hello Jhow '});
});

export default routes;

