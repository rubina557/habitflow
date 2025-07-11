import {
  Flex, Text, Checkbox, IconButton, Spacer, Collapse, Box, VStack,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useHabits } from '../context/HabitContext';
import { isHabitCompletedToday } from '../utils/dateUtils';
import StreakChart from './StreakChart';
import HabitCalendar from './HabitCalendar'; 
import { useState } from 'react';

const HabitItem = ({ habit }) => {
  const { toggleHabitCompletion, deleteHabit } = useHabits();
  const [showDetails, setShowDetails] = useState(false); 
  const isCompleted = isHabitCompletedToday(habit);

  return (
    <Box p={4} bg="white" boxShadow="sm" borderRadius="lg">
      <Flex align="center">
        <Checkbox
          colorScheme="teal"
          isChecked={isCompleted}
          onChange={() => toggleHabitCompletion(habit.id)}
          size="lg"
        />
        <Text
          ml={4}
          fontSize="lg"
          as={isCompleted ? 's' : 'span'}
          color={isCompleted ? 'gray.400' : 'gray.700'}
          cursor="pointer"
          // Toggle details when clicking the habit name
          onClick={() => setShowDetails(!showDetails)}
        >
          {habit.name}
        </Text>
        <Spacer />
        <IconButton
          aria-label="Delete habit"
          icon={<DeleteIcon />}
          variant="ghost"
          colorScheme="red"
          onClick={() => deleteHabit(habit.id)}
        />
      </Flex>
      {/* The collapsible section now shows both chart and calendar */}
      <Collapse in={showDetails} animateOpacity>
        <VStack spacing={6} mt={6} align="stretch">
          <StreakChart habit={habit} />
          <HabitCalendar completions={habit.completions} />
        </VStack>
      </Collapse>
    </Box>
  );
};

export default HabitItem;