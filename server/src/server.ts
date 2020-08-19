import express, { response, request } from 'express';

const app = express();

const users = [
  'Jhonatan',
  'Diego',
  'Robson',
  'Carlos'
];

app.get('/users', (request, response) =>{ // essa funcao sempre recebe dois parametros, rota e uma funcao.
  console.log('Listagem de usuários');
  return response.json(users);
});

app.get('/users/:id', (request, response) =>{
  const id = Number(request.params.id);
  
  const user = users[id];

  return response.json(user);
      
}); // o dois pontos significa que to recebendo um parametro


app.post('/users', (request, response) => {
  const user = {
    name: 'Jhonatan',
    email: 'jhonatan@jvbsoftware.com.br'
  }

  return response.json(user);
  
});


app.listen(3333); // para listar na porta 3333


// resquest -> serve para receber dados da requisicao que esta acontecendo
// response -> serve para gente receber a resposta
// metodo send -> para receber em forma de texto
// JSON -> Java script object notation
//rota:  endereco completo da requisição
// recurso: qual entidade estamos acessando

// GET: buscar uma ou mais informações do backend
// POST: Criar uma nova informação no backend 
//PUT: atualizar uma informação existente no backend
//DELETE: remover uma informção.
// request param: Parâmetros que vem na propria rota que identificam um recurso.
//query parm: parametros opcionais