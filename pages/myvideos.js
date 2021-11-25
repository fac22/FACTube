import MyVideos from '../components/MyVideos.js';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';
import Auth from '../components/Auth';

export default function MyVideosPage() {
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
        <MyVideos key={session.user.id} session={session} />
      )}
    </>
  );
}
