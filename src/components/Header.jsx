import { Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Flex as="header" p={4} bg="white" boxShadow="sm" align="center">
      <Heading as="h1" size="md" color="teal.500">
        HabitFlow
      </Heading>
      <Spacer />
      <Flex gap={2}>
        <Button as={RouterLink} to="/" variant="ghost">
          Dashboard
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;