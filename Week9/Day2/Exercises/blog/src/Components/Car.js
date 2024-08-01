import React, {useState} from 'react';
import Garage from './Garage';

function Car(props) {
    const [color,setColor] = useState('red');
  return (
    <div>
    <header>
      This car is {color} {props.model}
    </header>
     <Garage size="small" /> 
     </div>
  );
}

export default Car;