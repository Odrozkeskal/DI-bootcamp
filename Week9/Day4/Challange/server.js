const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  const { input } = req.body;
  res.json({ message: `I just get your POST require. Here what you send: ${input}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});