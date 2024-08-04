import React from 'react';
import { useTasks } from '../context/TaskContext';
import { Button, ButtonGroup } from '@mui/material';

const FilterControls = () => {
  const { setFilter } = useTasks();

  return (
    <ButtonGroup variant="contained" aria-label="filter tasks">
      <Button onClick={() => setFilter('all')}>Show All</Button>
      <Button onClick={() => setFilter('active')}>Show Active</Button>
      <Button onClick={() => setFilter('completed')}>Show Completed</Button>
    </ButtonGroup>
  );
};

export default FilterControls;