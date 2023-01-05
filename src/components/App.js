import { Box } from '@chakra-ui/react';
import { Contacts } from 'pages/Contacts/Contacts';
import { Home } from 'pages/Home/Home';
import { LoginForm } from 'pages/Login/Login';
import { RegisterForm } from 'pages/Register/Register';
import { NotFound } from 'pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userRefresh } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <Box maxW="1200px" mr="auto" ml="auto">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Box>
  );
};
