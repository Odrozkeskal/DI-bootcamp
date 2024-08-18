import React, { useState } from 'react';
import { Todo } from './types';
import List from './list';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(), // Используем текущую временную метку в качестве уникального идентификатора
      text: `New Todo ${Date.now()}`
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <List
        items={todos}
        renderItem={(todo) => (
          <li key={todo.id}>{todo.text}</li>
        )}
      />
    </div>
  );
};

export default TodoApp;
