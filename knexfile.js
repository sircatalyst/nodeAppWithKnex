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
      min: 2,
      max: 10
    },
    }
};
