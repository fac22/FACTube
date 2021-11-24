import AddVideo from '../components/AddVideo';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';
import Typography from '@mui/material/Typography';

const AddVideoPage = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <title>FAC-Tube: Login</title>
      {!session ? (
        <Link href="/login">
          <a>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontFamily: 'Roboto',
                fontSize: 20,
              }}
            >
              Please sign up
            </Typography>
          </a>
        </Link>
      ) : (
        <AddVideo key={session.user.id} session={session} />
      )}
    </>
  );
};

export default AddVideoPage;
