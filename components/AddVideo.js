import { useState } from 'react';
import { supabase } from '../lib/initSupabase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AddVideo = () => {
  const [loading, setLoading] = useState(true);
  const [yt_id, setyt_id] = useState('');
  const [video_title, setvideo_title] = useState(null);
  const [description, setdescription] = useState(null);

  async function addVideo() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        yt_id,
        video_title,
        description,
        added_by: user.id,
      };

      let { error } = await supabase.from('videos').upsert(updates, {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo();
  };

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
          Add Video
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            InputLabelProps={{ shrink: true }}
            id="videoID-input"
            name="Video ID"
            label="YouTube Video ID"
            type="text"
            required
            value={yt_id}
            onChange={(e) => setyt_id(e.target.value)}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            id="videoTitle-input"
            name="Video Title"
            label="Video Title"
            type="text"
            value={video_title}
            onChange={(e) => setvideo_title(e.target.value)}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            id="videoDescription-input"
            name="Video Description"
            label="Video Description"
            type="text"
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />

          <Box sx={{ mt: 5 }}>
            <Button
              style={{ backgroundColor: '#1060E2', color: '#ffffff' }}
              variant="contained"
              type="submit"
            >
              Add Video
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddVideo;
