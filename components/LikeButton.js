import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlined from '@material-ui/icons/FavoriteOutLined';
import IconButton from '@mui/material/IconButton';

const LikeButton = () => {
  const [like, setLike] = useState(false);
  if (!like) {
    return (
      <IconButton aria-label="Like" onClick={() => setLike(true)}>
        <FavoriteBorderIcon fontSize="large" sx={{ color: '#f44336' }} />
      </IconButton>
    );
  }
  return (
    <IconButton
      aria-label="Like"
      onClick={() => setLike(false)}
      sx={{ color: '#f44336' }}
    >
      <FavoriteOutlined fontSize="large" />
    </IconButton>
  );
};

export default LikeButton;
