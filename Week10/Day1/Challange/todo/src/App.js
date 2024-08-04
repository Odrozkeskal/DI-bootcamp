import React from 'react';
import { TaskProvider } from './context/TaskContext'; 
import TaskList from './components/TaskList';
import FilterControls from './components/FilterControls';
import TaskForm from './components/TaskForm';
import { CssBaseline, Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <TaskProvider>
      <CssBaseline /> 
      <Container maxWidth="sm">
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Task Manager
          </Typography>
          <TaskForm />
          <FilterControls />
          <TaskList />
        </Box>
      </Container>
    </TaskProvider>
  );
}

export default App;