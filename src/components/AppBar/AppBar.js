import { Flex, Box, Spacer, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <Flex>
        <Box p="4">
          <Link to="/">Home</Link>
        </Box>
        <Spacer />
        <Box p="4">
          <Link to="/register">Sign up</Link>
        </Box>
        <Box p="4">
          <Link to="/login">Log in</Link>
        </Box>
      </Flex>
      <Divider />
    </>
  );
};
