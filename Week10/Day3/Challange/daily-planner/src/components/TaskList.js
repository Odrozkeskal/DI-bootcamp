import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasksForDate } from '../features/tasks/tasksSelectors'; 
import DeleteTask from './DeleteTask';  
import EditTask from './EditTask';  

const TaskList = ({ selectedDate }) => {
  const tasks = useSelector(state => selectTasksForDate(state, selectedDate));

  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <EditTask task={task} selectedDate={selectedDate} />
            <DeleteTask task={task} selectedDate={selectedDate} />
          </li>
        ))
      ) : (
        <li>No tasks for this day.</li>
      )}
    </ul>
  );
};

export default TaskList;