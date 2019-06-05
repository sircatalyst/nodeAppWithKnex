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

// module.exports = {
//     development: {
//       client: "pg", // pg is the database library for postgreSQL on knexjs
//     connection: "postgres://localhost/knex", // Your postgres user nam 
//     migrations: {
//       directory: __dirname + '/db/migrations',
//     },
//     seeds: {
//       directory: __dirname + '/db/seeds',
//     },
//   }
// }


// const database = knex({
//   client: "pg", // pg is the database library for postgreSQL on knexjs
//   connection: {
//     host: "localhost", // Your local host IP
//     user: "postgres", // Your postgres user name
//     password: "sircatalyst", // Your postrgres user password
//     database: "knex" // Your database name
//   }
// });

// module.exports = database;


// var knex = require('knex')({
//   client: 'pg',
//   version: '7.2',
//   connection: { 
//       host: "localhost", // Your local host IP
//       user: "postgres", // Your postgres user name
//       password: "sircatalyst", // Your postrgres user password
//       database: "knex" // Your database name
//   }
// });

// var knex = require('knex')({
//   client: 'mysql',
//   connection: { 
//       host: "localhost", // Your local host IP
//       user: "", // Your postgres user name
//       password: "", // Your postrgres user password
//       database: "knex" // Your database name
//   },
//   migrations: {
//     tableName: 'migrations'
//   }
// });

// module.exports = knex;