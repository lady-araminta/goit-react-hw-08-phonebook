import {
  Avatar,
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <Flex alignItems="center" h="64px" fontWeight="700">
      <Box p="4">
        <Link to="/contacts">Contacts</Link>
      </Box>
      <Spacer />
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar size="sm" name={user} />
        <Popover>
          <PopoverTrigger>
            <Box p="4">Welcome, {user}!</Box>
          </PopoverTrigger>
          <Portal>
            <PopoverContent w="112px">
              <PopoverArrow />
              <PopoverBody>
                <Button onClick={() => dispatch(logout())}>Log out</Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Stack>
    </Flex>
  );
};
