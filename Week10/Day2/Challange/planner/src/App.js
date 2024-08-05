import React, { useState } from 'react';
import DateSelector from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <h1>Task Planner</h1>
      <DateSelector
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <AddTask selectedDate={selectedDate.toISOString().split('T')[0]} />
      <TaskList selectedDate={selectedDate.toISOString().split('T')[0]} />
    </div>
  );
}

export default App;