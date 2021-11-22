import Account from '../components/Account';
import Auth from '../components/Auth';
import { SessionHandler } from './index.js';

const Login = () => {
  const session = SessionHandler();
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
