
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert(
        {
          name: 'Oliver Twist',
          password: 'twister',
          email: 'ollie@gmail.com',
          teacher: false
        }),
    knex('users').insert(
        {
          name: 'Mike Man',
          password: 'eminem',
          email: 'mikeM@gmail.com',
          teacher: true
        })          
  );
};