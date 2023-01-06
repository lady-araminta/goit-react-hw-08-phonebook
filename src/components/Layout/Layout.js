import { Box } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box maxW="1200px" mr="auto" ml="auto">
      <AppBar />
      <Suspense fullback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
