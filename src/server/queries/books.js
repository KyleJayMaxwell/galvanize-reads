
var knex = require('../../../db/knex');
var books = function() {return knex('books');};

module.exports = {

  getAllBooks: function(){
    return books()
    .then(function(books) {
      return books;
    });
  },
  addBook: function(title, genre, description, cover_url){
    return books().insert({
      title: title,
      genre: genre,
      description: description,
      cover_url: cover_url
    })
    .then(function(results) {
      console.log(results);
      return results;
    });
  }

};