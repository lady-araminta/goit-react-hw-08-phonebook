import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserName } from 'redux/auth/selectors';

export const StartUser = () => {
  const user = useSelector(selectUserName);
  return (
    <Card maxW="420px" align="center" ml="auto" mr="auto" mt="120px">
      <CardHeader>
        <Heading textAlign="center">Welcome, {user}!</Heading>
      </CardHeader>
      <CardBody>
        <Text>Now you can create and edit contact lists</Text>
      </CardBody>
      <CardFooter>
        <Button w={120}>
          <Link to="/contacts">Contacts</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
