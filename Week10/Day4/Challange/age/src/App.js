import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AgeCounter from './components/AgeCounter'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AgeCounter />
      </div>
    </Provider>
  );
}

export default App;