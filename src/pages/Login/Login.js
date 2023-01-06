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
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdPassword, MdOutlineAlternateEmail } from 'react-icons/md';
import { login } from 'redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    reset();
  };

  return (
    <Card maxW="sm" ml="auto" mr="auto" mt="48px" mb="48px">
      <CardHeader>
        <Heading>Login form</Heading>
      </CardHeader>
      <CardBody>
        <InputGroup as="form" flexDirection="column" onSubmit={handleSubmit}>
          <Flex mb="8px">
            <InputLeftAddon
              pointerEvents="none"
              children={<MdOutlineAlternateEmail />}
            />
            <Input
              placeholder="Enter your e-mail"
              onChange={handleChange}
              value={email}
              name="email"
              type="email"
            />
          </Flex>
          <Flex mb="16px">
            <InputLeftAddon pointerEvents="none" children={<MdPassword />} />
            <Input
              placeholder="Enter password"
              onChange={handleChange}
              value={password}
              name="password"
              type="password"
            />
          </Flex>
          <Button type="submit" children="Log in" />
        </InputGroup>
      </CardBody>
    </Card>
  );
}
