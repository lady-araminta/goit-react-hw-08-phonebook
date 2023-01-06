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
import { AiOutlineUser } from 'react-icons/ai';
import { MdPassword, MdOutlineAlternateEmail } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    reset();
  };

  return (
    <Card maxW="sm" ml="auto" mr="auto" mt="48px" mb="48px">
      <CardHeader>
        <Heading>Register form</Heading>
      </CardHeader>
      <CardBody>
        <InputGroup as="form" flexDirection="column" onSubmit={handleSubmit}>
          <Flex mb="8px">
            <InputLeftAddon pointerEvents="none" children={<AiOutlineUser />} />
            <Input
              placeholder="Enter your name"
              onChange={handleChange}
              value={name}
              name="name"
              type="text"
            />
          </Flex>
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
          <Button type="submit" children="Sign up" />
        </InputGroup>
      </CardBody>
    </Card>
  );
}
