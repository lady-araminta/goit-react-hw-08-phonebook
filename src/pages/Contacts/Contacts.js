import { Box, Heading } from '@chakra-ui/react';

import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ModalAddContact } from 'components/Modal/modal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <ModalAddContact />
      <Filter />
      {isLoading && !error && <Loader />}
      {error && (
        <Heading size="md" textAlign="center">
          {error}
        </Heading>
      )}
      {contacts.length === 0 && !isLoading && !error && (
        <Heading size="md" textAlign="center">
          There are no saved contacts in your phonebook
        </Heading>
      )}
      {contacts.length > 0 && <ContactList />}
    </Box>
  );
};
