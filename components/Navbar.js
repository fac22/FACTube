import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Drawer from './Drawer';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';

const Navbar = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getAvatar();
  }, [session]);

  async function getAvatar() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppBar
      style={{ backgroundColor: '#1060E2', color: 'white' }}
      position="sticky"
      sx={{
        padding: 1.5,
        mb: 2,
      }}
    >
      <Toolbar>
        <Drawer />
        <Typography
          sx={{ flexGrow: 1, fontFamily: 'Montserrat', fontSize: 28, ml: 4 }}
        >
          <Link href="/">
            <a>FAC-tube</a>
          </Link>
        </Typography>
        <IconButton>
          <Link href="/login">
            <Avatar src={avatar_url} sx={{ mb: 2, width: 56, height: 56 }} />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
