
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors_books', function(table){
  table.increments('ab_id');
  table.integer('b_id').references('b_id').inTable('books');
  table.integer('a_id').references('a_id').inTable('authors');
  });   
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors_books');  
};
