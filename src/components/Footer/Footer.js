import { Card, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Card w={210} p="4" ml="auto" mr="auto">
      <Text fontSize="xs">
        Developed by{' '}
        <Link href="https://github.com/lady-araminta">Julia Parkhomenko</Link>
      </Text>
    </Card>
  );
};
