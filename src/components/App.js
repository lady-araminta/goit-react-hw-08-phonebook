import { Box, Heading } from '@chakra-ui/react';
import { Contacts } from 'pages/Contacts/Contacts';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { RegisterForm } from 'pages/Register/Register';
import { NotFound } from 'pages/NotFound/NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { AppBar } from './AppBar/AppBar';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';

export const OldApp = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box maxW="1200px" mr="auto" ml="auto">
      <ContactForm />
      {contacts.length >= 1 && <Filter />}
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

export const App = () => {
  return (
    <Box maxW="1200px" mr="auto" ml="auto">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Box>
  );
};
