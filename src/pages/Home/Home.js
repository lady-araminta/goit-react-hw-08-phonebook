import { StartAuth } from 'components/Start/StartAuth';
import { StartUser } from 'components/Start/StartUser';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <>{isLoggedIn ? <StartUser /> : <StartAuth />}</>;
}
