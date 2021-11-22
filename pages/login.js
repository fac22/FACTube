import Account from '../components/Account';
import Auth from '../components/Auth';
import { sessionHandler } from './index.js';

const Login = () => {
  const session = sessionHandler();
  return (
    <>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </>
  );
};

export default Login;
