import React, { useState } from 'react';

const Phone = () => {
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black"); 
  const [year] = useState(2020);

  const changeColor = () => {
    setColor('blue'); 
  };

  return (
    <div>
      <h1 style={{ fontWeight: 'bold' }}>My phone is a {brand}</h1>
      <p>It is a {color} {model} from {year}</p>
      <button onClick={changeColor}>Change Color</button> 
    </div>
  );
};

export default Phone;