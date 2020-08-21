import express from 'express';
import routes from './routes';

const app = express();
app.use(routes);



app.listen(3333); // para listar na porta 3333
