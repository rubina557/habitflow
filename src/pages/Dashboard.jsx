import { VStack, Heading, Box } from '@chakra-ui/react';
import HabitList from '../components/HabitList';
import AddHabitForm from '../components/AddHabitForm';
import QuoteDisplay from '../components/QuoteDisplay';

const Dashboard = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h1" size="xl" mb={4}>Dashboard</Heading>
        <QuoteDisplay />
      </Box>
      <AddHabitForm />
      <HabitList />
    </VStack>
  );
};

export default Dashboard;