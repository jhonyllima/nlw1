import express from 'express';

const app = express();

app.get('/users', (request, response) =>{ // essa funcao sempre recebe dois parametros, rota e uma funcao.
  console.log('Listagem de usuários');

  response.json([
    'Jhonatan',
    'Diego',
    'Robson',
    'Carlos',
    'Julia'
  ]);
});

app.listen(3333); // para listar na porta 3333


// resquest -> serve para receber dados da requisicao que esta acontecendo
// response -> serve para gente receber a resposta
// metodo send -> para receber em forma de texto
// JSON -> Java script object notation