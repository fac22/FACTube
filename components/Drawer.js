import { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  paper: {
    background: '#1060E2',
    color: 'white',
  },
});

export default function DrawerComponent() {
  const [open, setOpen] = useState(false);
  const styles = useStyles();
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
        classes={{ paper: styles.paper }}
      >
        <Box
          sx={{
            p: 5,
          }}
        >
          <List>
            <ListItem>
              <Typography>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography sx={{ mt: 2 }}>
                <Link href="/login">
                  <a>Profile</a>
                </Link>{' '}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography sx={{ mt: 2 }}>My Videos</Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography sx={{ mt: 2 }}> Search</Typography>
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
    </>
  );
}
