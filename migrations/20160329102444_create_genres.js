
exports.up = function(knex, Promise) {
  return knex.schema.createTable('genres', function(table){
  table.increments('g_id');
  table.string('genre');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('genres');  
};
