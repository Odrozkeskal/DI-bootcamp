import React, { useRef, useState } from "react";
import "./App.css";

function CharacterCounter() {
  const [charCount, setCharCount] = useState(0); 
  const inputRef = useRef(null); 

  const handleInputChange = () => {
    if (inputRef.current) {
      const textLength = inputRef.current.value.length;
      setCharCount(textLength);
    }
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Character Count: {charCount}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;