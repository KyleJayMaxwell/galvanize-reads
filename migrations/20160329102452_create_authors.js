
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table){
  table.increments('a_id');
  table.string('first');
  table.string('last');
  table.text('bio');
  table.text('portrait_url');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');    
};
