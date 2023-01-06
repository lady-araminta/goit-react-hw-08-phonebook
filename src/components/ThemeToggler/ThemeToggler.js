import { Button, useColorMode } from '@chakra-ui/react';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';

export const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'ligth' ? <MdOutlineModeNight /> : <MdOutlineLightMode />}
    </Button>
  );
};
