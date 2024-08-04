import React from 'react';
import { useTasks } from '../context/TaskContext';
import { Card, CardContent, Button, Typography } from '@mui/material';

const TaskList = () => {
  const { state, toggleTask, removeTask, editTask } = useTasks();
  const { tasks, filter } = state;
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div>
      {filteredTasks.map(task => (
        <Card key={task.id} sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </Typography>
            <Button variant="contained" onClick={() => toggleTask(task.id)}>
              {task.completed ? 'Mark as Active' : 'Mark as Completed'}
            </Button>
            <Button variant="contained" color="error" onClick={() => removeTask(task.id)}>
              Remove
            </Button>
            <Button variant="contained" onClick={() => editTask(task.id, prompt('New task text:'))}>
              Edit
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;