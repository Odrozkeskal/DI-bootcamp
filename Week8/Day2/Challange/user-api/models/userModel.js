const knex = require('knex')(require('../knexfile'));

const addUser = async (userData) => {
  return knex.transaction(async (trx) => {
    const [userId] = await trx('users').insert(userData).returning('id');
    return userId;
  });
};

const getUserById = (id) => knex('users').where({ id }).first();
const getUserByUsername = (username) => knex('users').where({ username }).first();
const getAllUsers = () => knex('users').select('*');
const updateUser = (id, userData) => knex('users').where({ id }).update(userData);

const addHashPassword = (username, passwordHash) => {
  return knex('hashpwd').insert({ username, password: passwordHash });
};

const getPasswordHashByUsername = (username) => knex('hashpwd').where({ username }).first();

module.exports = {
  addUser,
  getUserById,
  getUserByUsername,
  getAllUsers,
  updateUser,
  addHashPassword,
  getPasswordHashByUsername
};
