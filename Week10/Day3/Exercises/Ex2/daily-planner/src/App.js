import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Daily Planner</h1>
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <TaskForm selectedDate={selectedDate} />
        <TaskList selectedDate={selectedDate} />
      </div>
    </Provider>
  );
}

export default App;
