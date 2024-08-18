const authRoutes = require('./auth');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const authenticateToken = require('./middleware/auth');
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authenticateToken = require('./middleware/auth');

app.use(bodyParser.json());
app.use(cookieParser());


app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


app.use(bodyParser.json());
app.use(cookieParser());
app.use('/auth', authRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


app.get('/protected', authenticateToken, (req, res) => {
    res.send('This is a protected route');
  });
  