import { Box, Flex, Spacer } from '@chakra-ui/react';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Flex h="64px" fontWeight="700">
      <Box p="4">
        <Link to="/">Home</Link>
      </Box>
      <Box p="4">
        <ThemeToggler />
      </Box>
      <Spacer />
      <Box p="4">
        <Link to="/register">Sign up</Link>
      </Box>
      <Box p="4">
        <Link to="/login">Log in</Link>
      </Box>
    </Flex>
  );
};
