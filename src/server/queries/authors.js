
var knex = require('../../../db/knex');
var authors = function() {return knex('authors');};

module.exports = {

  getAllAuthors: function(){
    return authors()
    .then(function(authors) {
      return authors;
    });
  },
  getSingleAuthor: function(id){
    return authors()
    .where('a_id', id)
    .then(function(author) {
      return author;
    });
  },
  editAuthor: function(id, first, last, bio, portrait_url) {
    return authors()
    .where('a_id', id).update({
      first: first, 
      last: last,
      bio: bio,
      portrait_url: portrait_url
    })
    .then(function(results) {
      return results;
    });
  },
  deleteAuthor: function(id) {
    return authors().where('a_id', id).del().then(function(results) {
      return results;
    });
  }

};