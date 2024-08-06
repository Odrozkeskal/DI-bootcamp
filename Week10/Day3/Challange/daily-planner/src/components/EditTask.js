import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasks/tasksSlice';

const EditTask = ({ task, selectedDate }) => {
  const [newTaskText, setNewTaskText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTask({ date: selectedDate, taskId: task.id, newText: newTaskText }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskText}
        onChange={e => setNewTaskText(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditTask;