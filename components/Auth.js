import { useState } from 'react';
import { supabase } from '../lib/initSupabase';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <p>We will email you a magic link to log in</p>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(email);
        }}
        className="button block"
        disabled={loading}
      >
        <span>{loading ? 'Loading' : 'Send magic link'}</span>
      </button>
    </>
  );
};

export default Auth;
