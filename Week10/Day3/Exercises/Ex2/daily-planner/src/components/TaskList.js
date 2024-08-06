import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, editTask } from '../features/tasks/tasksSlice';

const TaskList = ({ selectedDate }) => {
  const tasks = useSelector((state) => state.tasks[selectedDate] || []);
  const dispatch = useDispatch();

  const handleRemove = (taskId) => {
    dispatch(removeTask({ date: selectedDate, taskId }));
  };

  const handleEdit = (taskId) => {
    const updatedTask = prompt('Edit task:');
    if (updatedTask) {
      dispatch(editTask({
        date: selectedDate,
        taskId,
        updatedTask: { id: taskId, text: updatedTask }
      }));
    }
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleEdit(task.id)}>Edit</button>
          <button onClick={() => handleRemove(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;