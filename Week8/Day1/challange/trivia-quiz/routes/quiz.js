const express = require('express');
const router = express.Router();
const triviaQuestions = require('../trivia');

let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }
  const question = triviaQuestions[currentQuestionIndex].question;
  res.json({ question });
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    score++;
    res.json({ message: 'Correct!', nextQuestion: true });
  } else {
    res.json({ message: 'Incorrect. Try again.', nextQuestion: false });
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  router.post('/', (req, res) => {
    if (currentQuestionIndex >= triviaQuestions.length) {
      return res.json({ message: 'Quiz already completed. Check your score at /quiz/score.' });
    }
  
    const userAnswer = req.body.answer;
    if (!userAnswer) {
      return res.status(400).json({ message: 'No answer provided.' });
    }
  
    const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
      userScore++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < triviaQuestions.length) {
      res.json({
        message: userAnswer === correctAnswer ? 'Correct!' : 'Incorrect!',
        question: triviaQuestions[currentQuestionIndex].question,
        index: currentQuestionIndex,
      });
    } else {
      res.json({ message: 'Quiz complete. Check your score at /quiz/score.' });
    }
  });
  
});

router.get('/score', (req, res) => {
  res.json({ score, totalQuestions: triviaQuestions.length });
});

module.exports = router;
