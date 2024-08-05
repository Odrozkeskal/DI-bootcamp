import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './actions';
import TaskList from './TaskList';
import AddTask from './AddTask';

const App = ({ todos, addTodo, toggleTodo, removeTodo }) => (
  <div>
    <h1>Todo List</h1>
    <AddTask onAddTodo={addTodo} />
    <TaskList
      todos={todos}
      onToggleTodo={toggleTodo}
      onRemoveTodo={removeTodo}
    />
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);