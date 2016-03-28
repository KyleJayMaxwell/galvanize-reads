
var knex = require('../../../db/knex');
var books = function() {return knex('books');};

module.exports = {

  getAllBooks: function(){
    return books()
    .then(function(books) {
      return books;
    });
  }

};