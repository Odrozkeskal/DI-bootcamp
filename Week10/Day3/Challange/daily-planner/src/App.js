import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Calendar from './components/Calendar';
import { selectTasksForDate } from './features/tasks/tasksSelectors';

function App() {
  const [selectedDate, setSelectedDate] = useState('2024-08-06');
  const tasks = useSelector(state => selectTasksForDate(state, selectedDate));

  return (
    <div className="App">
      <h1>Daily Planner</h1>
      <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <AddTask selectedDate={selectedDate} />
      <TaskList tasks={tasks} selectedDate={selectedDate} />
    </div>
  );
}

export default App;