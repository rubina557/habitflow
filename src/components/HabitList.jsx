import { VStack, Heading, Text, Box } from '@chakra-ui/react';
import { useHabits } from '../context/HabitContext';
import HabitItem from './HabitItem';

const HabitList = () => {
  const { habits } = useHabits();

  if (habits.length === 0) {
    return (
      <Box p={8} bg="white" borderRadius="lg" textAlign="center">
        <Heading as="h3" size="md" mb={2}>No habits yet!</Heading>
        <Text color="gray.500">Add a new habit above to get started.</Text>
      </Box>
    );
  }

  return (
    <VStack spacing={4} align="stretch">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </VStack>
  );
};

export default HabitList;