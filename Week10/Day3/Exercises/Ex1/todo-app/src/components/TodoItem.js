import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      {todo.text}
      <button onClick={onRemove}>Delete</button>
    </li>
  );
};

export default TodoItem;