import React, { createContext, useReducer, useContext } from 'react';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }] };
    case 'REMOVE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) };
    case 'TOGGLE_TASK':
      return { ...state, tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      )};
    case 'EDIT_TASK':
      return { ...state, tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, text: action.text } : task
      )};
    case 'SET_FILTER':
      return { ...state, filter: action.filter };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [], filter: 'all' });

  const addTask = text => dispatch({ type: 'ADD_TASK', text });
  const removeTask = id => dispatch({ type: 'REMOVE_TASK', id });
  const toggleTask = id => dispatch({ type: 'TOGGLE_TASK', id });
  const editTask = (id, text) => dispatch({ type: 'EDIT_TASK', id, text });
  const setFilter = filter => dispatch({ type: 'SET_FILTER', filter });

  return (
    <TaskContext.Provider value={{ state, addTask, removeTask, toggleTask, editTask, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};