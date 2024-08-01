import React, { useState } from 'react';

const Events = () => {
 
  const [inputValue, setInputValue] = useState('');
  
  const [isToggleOn, setIsToggleOn] = useState(true);

  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`React: ${inputValue}`);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleToggleClick = () => {
    setIsToggleOn(prevIsToggleOn => !prevIsToggleOn);
  };
  
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type something and press Enter"
      />
      <button onClick={handleToggleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
      <button onClick={() => alert('I was clicked')}>
        Click Me
      </button>
    </div>
  );
};

export default Events;