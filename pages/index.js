import Search from '../components/Search.js';
import { supabase } from '../lib/initSupabase.js';
import ReactPlayer from 'react-player/youtube';
import LikeButton from '../components/LikeButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Home = ({ databaseVideos }) => {
  return (
    <div>
      <title>FAC-Tube</title>

      {databaseVideos.map((video) => (
        <Card
          variant="outlined"
          sx={{
            padding: 3,
            mb: 2,
            boxShadow: 2,
          }}
          key={video.id}
        >
          <CardMedia>
            <ReactPlayer
              controls={true}
              url={`https://www.youtube.com/embed/${video.id}`}
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
            {/* <Typography
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
            </Typography> */}
            {/* <LikeButton video={video} />  */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const { data, error } = await supabase.from('videos').select();
  return {
    props: {
      databaseVideos: data,
      dataError: error,
    },
  };
}

export default Home;
