import { createSelector } from '@reduxjs/toolkit';
export const selectAllTasks = state => state.tasks;

export const selectTasksByStatus = status => createSelector(
  [selectAllTasks],
  tasks => tasks.filter(task => task.status === status)
);