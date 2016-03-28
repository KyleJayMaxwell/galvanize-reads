
var knex = require('../../../db/knex');
var books = function() {return knex('books');};

module.exports = {

  getAllBooks: function(){
    return books()
    .then(function(books) {
      return books;
    });
  },
  getSingleBook: function(id){
    return books()
    .where('b_id', id)
    .then(function(book) {
      return book;
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
  },
  deleteBook: function(id) {
    return books().where('b_id', id).del().then(function(results) {
      return results;
    });
  }

};