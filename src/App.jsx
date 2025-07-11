import { Container, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Header />
      <Container maxW="container.lg" pt={8} pb={8}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;