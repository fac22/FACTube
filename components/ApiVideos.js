import ReactPlayer from 'react-player/youtube';
import LikeButton from './LikeButton';
import { dummyData } from '../lib/database';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ApiVideos = () => {
  return (
    <div>
      {dummyData.map((video) => (
        <Card
          variant="outlined"
          sx={{
            padding: 3,
            mb: 2,
            boxShadow: 2,
          }}
          key={video.id.videoId}
        >
          <CardMedia>
            <ReactPlayer
              controls={true}
              url={`https://www.youtube.com/embed/${video.id.videoId}`}
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
              {video.snippet.title}
            </Typography>
            <Typography
              gutterBottom
              sx={{ fontFamily: 'Roboto', fontSize: 17 }}
            >
              {video.snippet.channelTitle}
            </Typography>
            <Typography
              gutterBottom
              color="text.secondary"
              sx={{ fontFamily: 'Roboto', fontSize: 15 }}
            >
              {video.snippet.description}
            </Typography>
            {/* <LikeButton video={video} /> */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ApiVideos;
