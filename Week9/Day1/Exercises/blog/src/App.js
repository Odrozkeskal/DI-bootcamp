// EX1
// import React from 'react';

// function App() {
//   const myelement = <h1>I Love JSX!</h1>;
  
//   // Создаем переменную sum
//   const sum = 5 + 5;

//   return (
//     <div>
//       <p>Hello World!</p>
      
//       {myelement}
      
//       <p>React is {sum} times better with JSX</p>
//     </div>
//   );
// }

//Ex2

// import React from 'react';
// import UserFavoriteAnimals from './userFavorateAnimals';

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
// };

// function App() {
//   return (
//     <div>
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
      
//       <UserFavoriteAnimals animals={user.favAnimals} />
//     </div>
//   );
// }
//Ex3


import React from 'react';
import Exercise from './Exercise3'; 

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: 'DodgerBlue' }}>Exercise 3</h1>
      <Exercise />
    </div>
  );
}

export default App;