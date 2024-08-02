const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.post('/your-webhook-endpoint', (req, res) => {
  console.log('Received data:', req.body);
  res.send('Data was received');
});

app.listen(PORT, () => {
  console.log(`Server is runs at ${PORT}`);
});