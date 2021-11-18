import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default function Videos({ data }) {
  return (
    <div className="video-list">
      {data.map((video) => (
        <div className="video-card" key={video.id.videoId}>
          <p>{video.snippet.title}</p>
          <h3>{video.snippet.channelTitle}</h3>
          <p>{video.snippet.description}</p>
          <ReactPlayer
            url={`https://www.youtube.com/embed/${video.id.videoId}`}
          />
        </div>
      ))}
    </div>
  );
}
