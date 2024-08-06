export const selectTasksForDate = (state, date) => {
    return state.tasks[date] || [];
  };