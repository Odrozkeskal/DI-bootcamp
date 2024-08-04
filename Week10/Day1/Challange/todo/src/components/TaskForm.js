import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { TextField, Button } from '@mui/material';

const TaskForm = () => {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = () => {
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <div>
      <TextField
        label="New Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        sx={{ marginRight: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Task
      </Button>
    </div>
  );
};

export default TaskForm;