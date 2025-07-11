import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTodayDateString } from '../utils/dateUtils';

const HabitContext = createContext();

export const useHabits = () => {
  return useContext(HabitContext);
};

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name, frequency) => {
    const newHabit = {
      id: uuidv4(),
      name,
      frequency,
      createdAt: new Date().toISOString(),
      completions: [],
    };
    setHabits(prevHabits => [...prevHabits, newHabit]);
  };

  const deleteHabit = (id) => {
    setHabits(prevHabits => prevHabits.filter(habit => habit.id !== id));
  };

  const toggleHabitCompletion = (id) => {
    const today = getTodayDateString();
    setHabits(prevHabits =>
      prevHabits.map(habit => {
        if (habit.id === id) {
          const completed = habit.completions.includes(today);
          const newCompletions = completed
            ? habit.completions.filter(date => date !== today)
            : [...habit.completions, today];
          return { ...habit, completions: newCompletions };
        }
        return habit;
      })
    );
  };

  const value = {
    habits,
    addHabit,
    deleteHabit,
    toggleHabitCompletion,
  };

  return <HabitContext.Provider value={value}>{children}</HabitContext.Provider>;
};