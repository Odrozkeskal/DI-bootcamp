exports.up = function(knex) {
    return knex.schema
      .createTable('users', (table) => {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('username').notNullable().unique();
        table.string('first_name');
        table.string('last_name');
      })
      .createTable('hashpwd', (table) => {
        table.increments('id').primary();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('hashpwd')
      .dropTable('users');
  };
  