const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const users = []; 

const SECRET_KEY = 'your-secret-key';
const TOKEN_EXPIRY = '1h';


router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { username, password: hashedPassword };
  users.push(user);
  res.status(201).send('User registered');
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: TOKEN_EXPIRY });
    res.cookie('token', token, { httpOnly: true });
    res.status(200).send('Logged in');
  } else {
    res.status(401).send('Invalid credentials');
  }
});


router.post('/refresh', (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken == null) return res.sendStatus(401); // Unauthorized
  
    jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403); // Forbidden
  
      const newAccessToken = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: TOKEN_EXPIRY });
      res.cookie('accessToken', newAccessToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      res.send('Token refreshed');
    });
  });
  

module.exports = router;
