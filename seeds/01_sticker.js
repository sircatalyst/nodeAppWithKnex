const stickers = require('../seedSample');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sticker').del()
    .then(function () {
      // Inserts seed entries
      return knex('sticker').insert(stickers);
    });
};
