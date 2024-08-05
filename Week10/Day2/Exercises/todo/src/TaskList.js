import React from 'react';
import Task from './Task';

const TaskList = ({ todos, onToggleTodo, onRemoveTodo }) => (
  <ul>
    {todos.map(todo => (
      <Task
        key={todo.id}
        todo={todo}
        onToggle={() => onToggleTodo(todo.id)}
        onRemove={() => onRemoveTodo(todo.id)}
      />
    ))}
  </ul>
);

export default TaskList;