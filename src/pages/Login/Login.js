import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { MdPassword, MdOutlineAlternateEmail } from 'react-icons/md';

export const Login = () => {
  return (
    <Card maxW="sm" ml="auto" mr="auto" mt="48px" mb="48px">
      <CardHeader>
        <Heading>Login form</Heading>
      </CardHeader>
      <CardBody>
        <InputGroup as="form" flexDirection="column">
          <Flex mb="8px">
            <InputLeftAddon
              pointerEvents="none"
              children={<MdOutlineAlternateEmail />}
            />
            <Input placeholder="Enter your e-mail" />
          </Flex>
          <Flex mb="16px">
            <InputLeftAddon pointerEvents="none" children={<MdPassword />} />
            <Input placeholder="Enter password" />
          </Flex>
          <Button type="submit" children="Log in" />
        </InputGroup>
      </CardBody>
    </Card>
  );
};
