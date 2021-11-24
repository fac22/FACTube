import { useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';
import Auth from '../components/Auth';
import Account from '../components/Account';

export default function Profile() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    console.log(supabase.auth.session());
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
}
