
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authors_books').del(), 

    // Inserts seed entries
    knex('authors_books').insert(
        {
          b_id: 1,
          a_id: 1,
        }),
    knex('authors_books').insert(
        {
          b_id: 2,
          a_id: 2,
        }),
    knex('authors_books').insert(
        {
          b_id: 3,
          a_id: 3 ,
        })      
  );
};