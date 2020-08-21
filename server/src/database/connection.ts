import knex from 'knex';
import path from 'path'; // padroniza a pasta confirme o S.O.

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  }
});

export default connection;