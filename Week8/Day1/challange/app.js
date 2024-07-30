const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const quizRouter = require('./routes/quizRoutes');
app.use('/quiz', quizRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});