import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { userRefresh } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Loader } from './Loader/Loader';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './Routes/RestrictedRoutes';
import { PrivateRoute } from './Routes/PrivateRoutes';

const Home = lazy(() => import('../pages/Home/Home'));
const LoginForm = lazy(() => import('../pages/Login/Login'));
const RegisterForm = lazy(() => import('../pages/Register/Register'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isUserRefrech = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return isUserRefrech ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/" component={<RegisterForm />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<LoginForm />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
