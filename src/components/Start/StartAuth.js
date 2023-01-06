import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const StartAuth = () => {
  return (
    <Card maxW="420px" align="center" ml="auto" mr="auto" mt="120px">
      <CardHeader>
        <Heading textAlign="center">Welcome to MyPhonebook!</Heading>
      </CardHeader>
      <CardBody>
        <Text>Please register or login to get started</Text>
      </CardBody>
      <CardFooter>
        <Button w={120} mr="16px">
          <Link to="/register">Sign up</Link>
        </Button>
        <Button w={120}>
          <Link to="/login">Log in</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
