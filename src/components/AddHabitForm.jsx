import { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Select,
  HStack,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useHabits } from '../context/HabitContext';

const AddHabitForm = () => {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const { addHabit } = useHabits();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addHabit(name, frequency);
    setName('');
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" bg="white">
      <form onSubmit={handleSubmit}>
        <HStack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="habit-name" srOnly>Habit Name</FormLabel>
            <Input
              id="habit-name"
              placeholder="e.g., Read for 15 minutes"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            w="150px"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </Select>
          <Button type="submit" colorScheme="teal">
            Add Habit
          </Button>
        </HStack>
      </form>
    </Box>
  );
};

export default AddHabitForm;