import React, { useState } from 'react';
import quotes from './QuotesDatabase';
import './App.css';

const App = () => {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [quoteColor, setQuoteColor] = useState(getRandomColor());
  const [buttonColor, setButtonColor] = useState(getRandomColor());

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function getRandomColor() {
    const colors = ['red', 'blue', 'yellow', 'brown', 'orange', 'violet'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function handleNewQuote() {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } 
    while (newQuote === currentQuote);
    
    setCurrentQuote(newQuote);
    const newColor = getRandomColor();
    setBgColor(newColor);
    setQuoteColor(newColor);
    setButtonColor(newColor);
  }

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <div className="quote-box">
        <h1 style={{ color: quoteColor }}>"{currentQuote.quote}"</h1>
        <p style={{ color: quoteColor }}>- {currentQuote.author}</p>
        <button
          style={{ backgroundColor: buttonColor }}
          onClick={handleNewQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;