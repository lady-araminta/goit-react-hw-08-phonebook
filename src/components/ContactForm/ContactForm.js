import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Button,
  Card,
  CardBody,
  Flex,
  useToast,
  CardHeader,
  Heading,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const toast = useToast();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const existingName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const existingNumber = contacts.some(contact => contact.number === number);

    if (existingName) {
      toast({
        description: 'This contact is alredy in contacts',
        position: 'top',
        duration: 3000,
      });
      reset();
      return;
    } else if (existingNumber) {
      toast({
        description: 'This contact is alredy in contacts',
        position: 'top',
        duration: 3000,
      });
      reset();
      return;
    } else {
      const newContact = { id: nanoid(), name, number };
      dispatch(addContact(newContact));
      toast({
        title: 'Contact created',
        description: "We've added this contact to the phonebook",
        status: 'success',
        position: 'top',
        duration: 3000,
      });
      reset();
    }
  };
  return (
    <Card maxW="sm" ml="auto" mr="auto" mt="48px" mb="48px">
      <CardBody>
        <CardHeader>
          <Heading size="md" textAlign="center">
            Add contact
          </Heading>
        </CardHeader>
        <Stack>
          <InputGroup as="form" onSubmit={handleSubmit} flexDirection="column">
            <Flex mb="8px">
              <InputLeftAddon children="Name" />
              <Input
                size="md"
                onChange={handleChange}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Flex>
            <Flex mb="16px">
              <InputLeftAddon children="Tel" />
              <Input
                size="md"
                onChange={handleChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Flex>
            <Button
              ml="auto"
              mr="auto"
              type="submit"
              children="Save to phonebook"
            />
          </InputGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};
