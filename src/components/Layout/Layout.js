import { Box } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box
      maxW="1200px"
      mr="auto"
      ml="auto"
      h="100vh"
      display="flex"
      flexDirection="column"
    >
      <AppBar />
      <Box flexGrow="1">
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer mt="16px" />
    </Box>
  );
};
