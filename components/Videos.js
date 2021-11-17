import React from 'react';

function Videos({ data }) {
  const listArr = data.items;

  return (
    <div>
      <div className="video-list">
        {listArr.map((video) => (
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

export default Videos;
