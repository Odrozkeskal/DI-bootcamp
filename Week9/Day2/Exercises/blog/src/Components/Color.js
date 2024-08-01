import React, { useState, useEffect } from 'react';

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert('useEffect reached');
  }, []); 


  const changeColorToBlue = () => {
    setFavoriteColor('blue');
  };

  return (
    <div>
      <h1>
        My favorite color is <strong>{favoriteColor}</strong>
      </h1>
      <button onClick={changeColorToBlue}>Change color to blue</button>
    </div>
  );
};

export default Color;