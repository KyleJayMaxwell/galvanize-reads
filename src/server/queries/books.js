
var knex = require('../../../db/knex');
var books = function() {return knex('books');};

module.exports = {

  getAllBooks: function(){
    return books()
    .fullOuterJoin('genres', 'books.g_id', 'genres.g_id')
    .then(function(books) {
      return books;
    });
  },
  getSingleBook: function(id){
    return books()
    .fullOuterJoin('genres', 'books.g_id', 'genres.g_id')
    .where('b_id', id)
    .then(function(book) {
      return book;
    });
  },
  addBook: function(title, g_id, description, cover_url){
    return books()
    .insert({
      title: title,
      g_id: g_id,
      description: description,
      cover_url: cover_url
    })
    .then(function(results) {
      return results;
    });
  },
  editBook: function(id, title, g_id, description, cover_url) {
    return books()
    .fullOuterJoin('genres', 'books.g_id', 'genres.g_id')
    .where('b_id', id).update({
      title: title,
      g_id: g_id,
      description: description,
      cover_url: cover_url
    })
    .then(function(results) {
      return results;
    });
  },
  deleteBook: function(id) {
    return books().where('b_id', id).del().then(function(results) {
      return results;
    });
  }

};