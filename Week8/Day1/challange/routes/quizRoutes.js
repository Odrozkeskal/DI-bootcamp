const express = require('express');
const router = express.Router();
const triviaQuestions = require('../data/questions');

let currentQuestionIndex = 0;
let userScore = 0;

router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.send('Quiz has ended. Please submit your answers.');
  }

  const question = triviaQuestions[currentQuestionIndex].question;
  res.json({ question });
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    userScore++;
    res.send('Correct!');
  } else {
    res.send('Incorrect. The correct answer was: ' + correctAnswer);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    res.send('Quiz has ended. Please get your score at /quiz/score.');
  }
});

router.get('/score', (req, res) => {
  res.json({ score: userScore, totalQuestions: triviaQuestions.length });
});

module.exports = router;