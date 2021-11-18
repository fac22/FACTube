import React from 'react';
import { orderBy } from 'lodash';

export default function Videos({ data }) {
  const [videoData, setVideoData] = React.useState(data.items);

  const sortData = (e) => {
    const copyVideoData = [...videoData];
    let order;

    e.target.value === 'newest' ? (order = 'desc') : (order = 'asc');

    const orderedVideos = orderBy(
      copyVideoData,
      ['snippet.publishTime'],
      [order]
    );
    setVideoData(orderedVideos);
  };

  return (
    <div>
      <form>
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
      </form>
      <div className="video-list">
        {videoData.map((video) => (
          <div className="video-card" key={video.id.videoId}>
            <p>{video.snippet.title}</p>
            <h3>{video.snippet.channelTitle}</h3>
            <p>{video.snippet.description}</p>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
