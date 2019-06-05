// Update with your config settings.
// const knex = require("knex");

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      database: 'knex',
      user: 'root',
      password: ''
    },
    pool: {
      max: 150,
      min: 0,
      acquire: 10 * 10000
    },
  },
  test: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      database: 'test-knex',
      user: 'root',
      password: ''
    },
  }
};
