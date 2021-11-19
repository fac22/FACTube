import React from 'react';
import { orderBy } from 'lodash';

export default function SortByDate({ videos, setVideos }) {
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
    <fieldset>
      <legend>Order by publish date</legend>
      <label htmlFor="newest" key="newest">
        Newest
      </label>
      <input
        type="radio"
        name="date"
        id="newest"
        value="newest"
        onChange={sortData}
      />

      <label htmlFor="oldest" key="oldest">
        Oldest
      </label>
      <input
        type="radio"
        name="date"
        id="oldest"
        value="oldest"
        onChange={sortData}
      />
    </fieldset>
  );
}
