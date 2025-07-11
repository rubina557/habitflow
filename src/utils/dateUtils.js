export const getTodayDateString = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const isHabitCompletedToday = (habit) => {
  return habit.completions.includes(getTodayDateString());
};

// TODO: Implement streak calculation logic
export const calculateStreak = (completions) => {
  if (!completions || completions.length === 0) return 0;

  return completions.length;
};
