
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { email: 'user1@example.com', username: 'user1', first_name: 'John', last_name: 'Doe' },
        { email: 'user2@example.com', username: 'user2', first_name: 'Jane', last_name: 'Smith' }
      ]);
    })
    .then(function () {
      return knex('hashpwd').del();
    })
    .then(function () {
      return knex('hashpwd').insert([
        { username: 'user1', password: '$2b$10$...' }, 
        { username: 'user2', password: '$2b$10$...' }  
      ]);
    });
};
