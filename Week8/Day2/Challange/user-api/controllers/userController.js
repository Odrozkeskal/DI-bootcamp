const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const saltRounds = 10;

const register = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    // Start transaction
    await userModel.addUser({ email, username, first_name, last_name });
    await userModel.addHashPassword(username, passwordHash);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.getUserByUsername(username);
    const hashPassword = await userModel.getPasswordHashByUsername(username);

    if (user && hashPassword && await bcrypt.compare(password, hashPassword.password)) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const count = await userModel.updateUser(req.params.id, req.body);
    if (count) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  register,
  login,
  getUsers,
  getUser,
  updateUser
};
