import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/counter/todos/todosSlice'; 

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});