import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { orderBy } from 'lodash';

const SortByDate = ({ videos, setVideos }) => {
  const sortData = (e) => {
    const copyVideoData = [...videos];
    let order;

    e.target.value === 'newest' ? (order = 'desc') : (order = 'asc');

    const orderedVideos = orderBy(
      copyVideoData,
      ['snippet.publishTime'],
      [order]
    );
    setVideos(orderedVideos);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort by publish date</FormLabel>

        <RadioGroup
          row
          aria-label="sort by publish date"
          name="row-radio-buttons-group"
        >
          <FormLabel>
            Newest
            <Radio
              onChange={sortData}
              value="newest"
              label="newest"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'Newest' }}
            />
          </FormLabel>
          <FormLabel>
            Oldest
            <Radio
              onChange={sortData}
              value="oldest"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'Oldest' }}
            />
          </FormLabel>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default SortByDate;
