import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../features/tasksSlice';

const TaskList = ({ selectedDate }) => {
  const tasks = useSelector(state => state.tasks[selectedDate] || []);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask({ date: selectedDate, id }));
  };

  const handleEdit = (id, newTask) => {
    dispatch(editTask({ date: selectedDate, id, newTask }));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.task}
          <button onClick={() => handleEdit(task.id, prompt('New task:', task.task))}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;