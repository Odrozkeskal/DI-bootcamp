import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import Color from './Color';

//Ex1

// function App() {
//   return (
//     <div>
//       <h1>An example with ErrorBoundary</h1>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//     </div>
//   );
// }

//Ex2

// const App = () => {
//   return (
//     <div>
//       <Color />
//     </div>
//   );
// };

//Ex3

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Color />
    </div>
  );
}

export default App;

