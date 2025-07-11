import { Box, Text, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { useQuote } from '../hooks/useQuote';

const QuoteDisplay = () => {
  const { quote, loading, error } = useQuote();

  if (loading) return <Spinner size="md" />;

  return (
    <Box p={4} bg="teal.50" borderRadius="md">
      {error && (
        <Alert status="warning" mb={2}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      <Text fontStyle="italic">"{quote.text}"</Text>
      <Text fontWeight="bold" textAlign="right" mt={1}>
        - {quote.author}
      </Text>
    </Box>
  );
};

export default QuoteDisplay;