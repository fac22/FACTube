import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { orderBy } from 'lodash';

const LikeFilter = ({ data, setLikeOrder }) => {
  const sortLikes = () => {
    const orderedVideos = orderBy(data, ['total_likes'], ['desc']);
    setLikeOrder(orderedVideos);
  };

  return (
    <form>
      <FormControl component="fieldset">
        <FormLabel component="legend">Order by</FormLabel>

        <RadioGroup
          row
          aria-label="sort by publish date"
          name="row-radio-buttons-group"
        >
          <FormLabel>
            Most Liked
            <Radio
              onChange={sortLikes}
              value="most_liked"
              label="most_liked"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'Most Liked' }}
            />
          </FormLabel>
        </RadioGroup>
      </FormControl>
    </form>
  );
};

export default LikeFilter;
