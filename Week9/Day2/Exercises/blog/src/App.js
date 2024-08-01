import React from 'react';
import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

//Ex1

// const carinfo = { name: 'Ford', model: 'Mustang' };

// function App() {
//   return (
//     <div className="App">
//       <Car model={carinfo.model} />
//     </div>
//   );
// }

//Ex2

// const App = () => {
//   return (
//     <div className="App">
//       <Events /> 
//     </div>
//   );
// };

//Ex3

// const App = () => {
//   return (
//     <div>
//       <Phone />
//     </div>
//   );
// };

//Ex4

const App = () => {
  return (
    <div>
      <Color />
    </div>
  );
};



export default App;
