import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);


  const handleVote = (languageName) => {
    setLanguages(prevLanguages =>
      prevLanguages.map(language =>
        language.name === languageName
          ? { ...language, votes: language.votes + 1 }
          : language
      )
    );
  };

  return (
    <div>
      <h1>Vote for Your Favorite Language</h1>
      <ul>
        {languages.map(language => (
          <li key={language.name}>
            <button onClick={() => handleVote(language.name)}>
              Vote for {language.name}
            </button>
            <span> Votes: {language.votes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
