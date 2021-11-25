import { useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';
import ReactPlayer from 'react-player/youtube';
// import LikeButton from './LikeButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MyVideos = () => {
  const [loading, setLoading] = useState(true);
  const [myVideos, setMyVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from('videos')
        .select(`video_title, yt_id, description, channel_title`)
        .eq('added_by', user.id);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data);
        setMyVideos(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  console.log('the state', myVideos);

  return (
    <>
      {myVideos.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          {myVideos.map((video) => (
            <Card
              variant="outlined"
              sx={{
                padding: 3,
                mb: 2,
                boxShadow: 2,
              }}
              key={video.yt_id}
            >
              <CardMedia>
                <ReactPlayer
                  controls={true}
                  url={`https://www.youtube.com/embed/${video.yt_id}`}
                  width="100%"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: 20,
                  }}
                >
                  {video.video_title}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ fontFamily: 'Roboto', fontSize: 17 }}
                >
                  {video.channel_title}
                </Typography>
                <Typography
                  gutterBottom
                  color="text.secondary"
                  sx={{ fontFamily: 'Roboto', fontSize: 15 }}
                >
                  {video.description}
                </Typography>
                {/* <LikeButton video={video} /> */}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};
export default MyVideos;
