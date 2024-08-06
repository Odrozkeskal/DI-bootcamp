import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/tasksSlice';

const DeleteTask = ({ task, selectedDate }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ date: selectedDate, taskId: task.id }));
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteTask;