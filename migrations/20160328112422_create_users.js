
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
  table.increments('u_id');
  table.string('name');
  table.string('password');
  table.string('email');
  table.boolean('teacher');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');   
};
