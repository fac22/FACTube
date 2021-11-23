import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import { dummyProfiles, dummyLikeLists } from '../lib/database';
import { supabase } from '../lib/initSupabase';
import { getUserId } from '../lib/model';

const dbAddLike = (user, video) => {
  const newLike = { id: Math.random(), user_id: user, video_id: video };
  dummyLikeLists.push(newLike);
};

const dbRemoveLike = (user, video) => {
  // dummyLikeLists.splice(unLike);
};

const likeChecker = (current, video) => {
  if (dummyLikeLists.has(current, video)) {
    return true;
  } else {
    return false;
  }
};

const LikeButton = ({ video }) => {
  const currentUserId = getUserId();
  // const [like, setLike] = useState(
  //   likeChecker(currentUserId, video.id.videoId)
  //   );
  const [like, setLike] = useState(false);

  // const currentUserOld = dummyProfiles[1].id;

  const addLike = () => {
    setLike(true);
    video.total_likes += 1;
    dbAddLike(currentUserId, video.id.videoId);
  };
  const removeLike = () => {
    setLike(false);
    video.likes -= 1;
    dbRemoveLike(currentUserId, video.id.videoId);
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
