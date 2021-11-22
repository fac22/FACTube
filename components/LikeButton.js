import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import { dummyProfiles, dummyLikeLists } from '../lib/database';
import { supabase } from '../lib/database';

const dbAddLike = (user, video) => {
  const newLike = { id: Math.random(), user_id: user, video_id: video };
  dummyLikeLists.push(newLike);
};

const dbRemoveLike = (user, video) => {
  // dummyLikeLists.splice(unLike);
};

const dbGetUser = () => {
  return supabase === undefined ? 0 : supabase.auth.user();
};

const LikeButton = ({ video }) => {
  const [like, setLike] = useState(false);

  const currentUserOld = dummyProfiles[1].id;
  const currentUser = dbGetUser();

  const addLike = () => {
    setLike(true);
    video.likes += 1;
    dbAddLike(currentUser, video.id.videoId);
  };
  const removeLike = () => {
    setLike(false);
    video.likes -= 1;
    dbRemoveLike(currentUser, video.id.videoId);
  };

  if (!like) {
    return (
      <IconButton aria-label="Like" onClick={() => addLike()}>
        <FavoriteBorderIcon fontSize="large" sx={{ color: '#f44336' }} />
        <p>{video.likes}</p>
      </IconButton>
    );
  }
  return (
    <IconButton
      aria-label="Like"
      onClick={() => removeLike()}
      sx={{ color: '#f44336' }}
    >
      <FavoriteOutlined fontSize="large" />
      <p>{video.likes}</p>
    </IconButton>
  );
};

export default LikeButton;
