import { useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const Account = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [cohort, setCohort] = useState(null);
  const [about_me, setAboutMe] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url, cohort, about_me`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        setCohort(data.cohort);
        setAboutMe(data.about_me);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile();
  };

  async function updateProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        cohort,
        about_me,
        updated_at: new Date(),
      };

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  const signout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const Input = styled('input')({
    display: 'none',
  });
  return (
    <>
      <Box
        sx={{
          '& .MuiTextField-root': { mt: 4, width: '35ch' },

          padding: 4,
          maxWidth: 300,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: 25,
            mb: 2,
          }}
        >
          My Profile
        </Typography>

        <form onSubmit={handleSubmit}>
          <Avatar
            alt={username}
            src={avatar_url}
            sx={{ mb: 2, width: 56, height: 56 }}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            id="avatar-url"
            name="avatar"
            label="Add link to profile picture"
            type="text"
            value={avatar_url}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
          <TextField
            id="email-input"
            name="email"
            type="text"
            value={session.user.email}
            disabled
          />

          <TextField
            InputLabelProps={{ shrink: true }}
            id="username-input"
            name="username"
            label="Username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            id="website-input"
            name="website"
            label="Website"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            id="cohort-input"
            name="cohort"
            label="FAC cohort"
            type="text"
            value={cohort}
            onChange={(e) => setCohort(e.target.value)}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            id="about_me-input"
            label="About Me"
            placeholder="About Me"
            multiline
            variant="standard"
            value={about_me}
            onChange={(e) => setAboutMe(e.target.value)}
          />

          <Box sx={{ mt: 5 }}>
            <Button
              style={{ backgroundColor: '#1060E2', color: '#ffffff' }}
              variant="contained"
              endIcon={<SaveIcon />}
              type="submit"
              disabled={loading}
            >
              Update my details
            </Button>
          </Box>
        </form>
        <Box sx={{ mt: 3 }}>
          <Button
            onClick={signout}
            color="error"
            variant="contained"
            endIcon={<LogoutIcon />}
            type="submit"
            disabled={loading}
          >
            Sign Out
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Account;
