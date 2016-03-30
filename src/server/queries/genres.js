
var knex = require('../../../db/knex');
var genres = function() {return knex('genres');};

module.exports = {

  getAllGenres: function(){
    return genres()
    .then(function(genres) {
      return genres;
    });
  }

};