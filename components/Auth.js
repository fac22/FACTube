import { useState } from 'react';
import { supabase } from '../lib/initSupabase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email);
  };

  return (
    <>
      <Typography
        gutterBottom
        variant="h5"
        sx={{
          fontFamily: 'Roboto',
          fontSize: 20,
        }}
      >
        Sign up
      </Typography>
      <Typography
        gutterBottom
        variant="h7"
        sx={{
          fontFamily: 'Roboto',
          fontSize: 15,
        }}
      >
        We will email you a magic link to create your account 🥳
      </Typography>
      <Box sx={{ mt: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email-input"
            name="email"
            label="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box sx={{ mt: 3 }}>
            <Button
              style={{ backgroundColor: '#1060E2', color: '#ffffff' }}
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              disabled={loading}
            >
              Send magic link
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Auth;
