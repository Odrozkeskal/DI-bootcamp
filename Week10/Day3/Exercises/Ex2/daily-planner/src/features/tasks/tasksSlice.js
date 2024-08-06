import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {},
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state[date]) {
        state[date] = [];
      }
      state[date].push(task);
    },
    editTask: (state, action) => {
      const { date, taskId, updatedTask } = action.payload;
      const tasks = state[date] || [];
      const taskIndex = tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex] = updatedTask;
      }
    },
    removeTask: (state, action) => {
      const { date, taskId } = action.payload;
      const tasks = state[date] || [];
      state[date] = tasks.filter(task => task.id !== taskId);
    },
  },
});

export const { addTask, editTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;