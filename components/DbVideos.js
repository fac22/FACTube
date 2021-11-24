import ReactPlayer from 'react-player/youtube';
// import LikeButton from './LikeButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const DbVideos = ({ data }) => {
  return (
    <div>
      {data.map((video) => (
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
            {/* <LikeButton video={video} /> */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DbVideos;
