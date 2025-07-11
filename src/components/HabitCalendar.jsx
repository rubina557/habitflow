import { Box, Text } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import "../calendar-theme.css"; 

/**
 * A component to display habit completions on a calendar.
 * @param {{ completions: string[] }} props - An array of completion dates in 'YYYY-MM-DD' format.
 */
const HabitCalendar = ({ completions = [] }) => {
  // A Set is used for fast O(1) lookups to check if a date is a completion date.
  const completionSet = new Set(completions);

  
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      if (completionSet.has(dateString)) {
        return "completed-day"; 
      }
    }
    return null;
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="sm">
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Completion Calendar
      </Text>
      <Calendar tileClassName={tileClassName} maxDate={new Date()} />
    </Box>
  );
};

export default HabitCalendar;
