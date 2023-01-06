import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Button,
  Card,
  CardBody,
  Flex,
  CardHeader,
  Heading,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const EditContactForm = ({ id }) => {
  const contacts = useSelector(selectContacts);
  const currentContact = contacts.find(contact => contact.id === id);
  const dispatch = useDispatch();
  const [name, setName] = useState(`${currentContact.name}`);
  const [number, setNumber] = useState(`${currentContact.number}`);

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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editContact({ id, name, number }));
  };

  return (
    <Card maxW="sm" ml="auto" mr="auto" mt="48px" mb="48px">
      <CardBody>
        <CardHeader>
          <Heading size="md" textAlign="center">
            Edit contact
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
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
