const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blog');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', blogRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});