
var knex = require('../../../db/knex');
var authors = function() {return knex('authors');};

module.exports = {

  getAllAuthors: function(){
    return authors()
    .then(function(authors) {
      return authors;
    });
  },
  // getSingleBook: function(id){
  //   return books()
  //   .where('b_id', id)
  //   .then(function(book) {
  //     return book;
  //   });
  // },
  addAuthor: function(first, last, bio, portrait_url){
    return authors().insert({
      first: first,
      last: last,
      bio: bio,
      portrait_url: portrait_url
    })
    .then(function(results) {
      console.log(results);
      return results;
    });
  }
  // editBook: function(id, title, genre, description, cover_url) {
  //   return books().where('b_id', id).update({
  //     title: title,
  //     genre: genre,
  //     description: description,
  //     cover_url: cover_url
  //   })
  //   .then(function(results) {
  //     return results;
  //   });
  // },
  // deleteBook: function(id) {
  //   return books().where('b_id', id).del().then(function(results) {
  //     return results;
  //   });
  // }

};