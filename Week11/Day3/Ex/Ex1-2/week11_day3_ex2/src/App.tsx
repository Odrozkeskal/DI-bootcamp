import React from 'react';
import Greeting from './components/Greeting';

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
};


export default App
