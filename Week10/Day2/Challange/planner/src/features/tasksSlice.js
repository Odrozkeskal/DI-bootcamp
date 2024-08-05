import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {},
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state[date]) {
        state[date] = [];
      }
      state[date].push({ id: uuidv4(), task });
    },
    editTask: (state, action) => {
      const { date, id, newTask } = action.payload;
      const tasks = state[date] || [];
      const task = tasks.find(task => task.id === id);
      if (task) {
        task.task = newTask;
      }
    },
    deleteTask: (state, action) => {
      const { date, id } = action.payload;
      state[date] = (state[date] || []).filter(task => task.id !== id);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;