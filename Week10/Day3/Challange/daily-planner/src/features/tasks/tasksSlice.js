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
      const { date, taskId, newText } = action.payload;
      const tasks = state[date] || [];
      const task = tasks.find(task => task.id === taskId);
      if (task) {
        task.text = newText;
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      const tasks = state[date] || [];
      state[date] = tasks.filter(task => task.id !== taskId);
    }
  }
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;