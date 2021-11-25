import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import { dummyProfiles, dummyLikeLists } from '../lib/database';
import { supabase } from '../lib/initSupabase';
import { getUserId } from '../lib/model';

const dbAddLike = async (video_id, user_id) => {
  try {
    let { error } = await supabase
      .from('likes')
      .upsert({ video_id, user_id }, { returning: 'minimal' });
    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
};

const dbRemoveLike = async (video_id, user_id) => {
  try {
    const updates = { video_id, user_id };
    let { error } = await supabase.from('likes').delete().match(updates);
    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
};

const dbUpdateLikeTotal = async (video_id, new_likes) => {
  try {
    let { error } = await supabase
      .from('videos')
      .update({ total_likes: `${new_likes}` })
      .eq('id', `${video_id}`);
    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
};

// If this worked, it would check if a user-video-combination is already in our likes table:
/*
const likeChecker = async (video_id, user_id) => {
  let { data, error } = await supabase
    .from('likes')
    .select()
    .eq(`video_id`, `${video_id}`)
    .eq(`user_id`, `${user_id}`);
  if (data.length === 0) {
    return false;
  } else {
    return true;
  }
};
*/

const LikeButton = ({ video }) => {
  const user_id = getUserId();
  const video_id = video.id;

  // If this worked, it would decide to fill/unfill the heart initially
  // const [like, setLike] = useState(async () => {
  //   await likeChecker(video_id, user_id);
  // });
  const [like, setLike] = useState();

  const [total, setTotal] = useState(video.total_likes);

  const addLike = () => {
    setLike(true);
    dbAddLike(video_id, user_id);
    setTotal(total + 1);
    dbUpdateLikeTotal(video_id, total + 1);
  };
  const removeLike = () => {
    setLike(false);
    dbRemoveLike(video_id, user_id);
    setTotal(total - 1);
    dbUpdateLikeTotal(video_id, total - 1);
  };

  if (!like) {
    return (
      <IconButton aria-label="Like" onClick={() => addLike()}>
        <FavoriteBorderIcon fontSize="large" sx={{ color: '#f44336' }} />
        <p>{total}</p>
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
      <p>{total}</p>
    </IconButton>
  );
};

export default LikeButton;
