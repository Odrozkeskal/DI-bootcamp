const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key';

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
