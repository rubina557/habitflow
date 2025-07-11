export const getTodayDateString = () => {
  const today = new Date();
  // Formats date to YYYY-MM-DD which is great for comparisons
  return today.toISOString().split('T')[0];
};

export const isHabitCompletedToday = (habit) => {
  return habit.completions.includes(getTodayDateString());
};

// TODO: Implement streak calculation logic
export const calculateStreak = (completions) => {
  // This is a placeholder. A real implementation would need to handle
  // consecutive days, weeks, or months based on habit frequency.
  if (!completions || completions.length === 0) return 0;
  
  // Simple example: just count total completions
  return completions.length; 
};