import { Box, Text } from '@chakra-ui/react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Helper to generate data for the last 7 days
const generateChartData = (completions) => {
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

    data.push({
      name: dayName,
      completed: completions.includes(dateString) ? 1 : 0,
    });
  }
  return data;
};

const StreakChart = ({ habit }) => {
  const data = generateChartData(habit.completions);
  
  if (habit.completions.length === 0) {
      return <Text color="gray.500" fontSize="sm">No completion data yet. Mark this habit as done to see progress!</Text>
  }

  return (
    <Box h="150px">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} width={20} />
          <Tooltip />
          <Bar dataKey="completed" fill="#4FD1C5" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StreakChart;
