const connection = require('./knex'); //connection

module.exports = {
    getAll() {
        // return connection.select('*').from('sticker'); //returns all in the table
        return connection('sticker'); //returns all in the table
    }
}