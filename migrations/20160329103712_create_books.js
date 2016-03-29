
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table){
  table.increments('b_id');
  table.string('title');
  table.integer('g_id').references('g_id').inTable('genres');
  table.text('description');
  table.text('cover_url');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books'); 
};
