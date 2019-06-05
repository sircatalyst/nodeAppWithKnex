var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
var knex = require('knex')(config);

const sql = knex('knex').toString();

console.log(sql);

knex.destroy();
