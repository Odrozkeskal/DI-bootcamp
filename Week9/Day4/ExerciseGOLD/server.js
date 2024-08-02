const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json());

app.post('/api/submit', (req, res) => {
  console.log(req.body);
  res.json(req.body); 
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});