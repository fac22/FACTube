import Account from '../components/Account';
import Auth from '../components/Auth';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';

const Login = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

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
