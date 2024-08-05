import React from 'react';

const Task = ({ todo, onToggle, onRemove }) => (
  <li>
    <span
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={onToggle}
    >
      {todo.text}
    </span>
    <button onClick={onRemove}>Remove</button>
  </li>
);

export default Task;