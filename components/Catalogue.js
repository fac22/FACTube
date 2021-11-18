import React from 'react';
import Videos from './Videos';
import { savedVideos } from '../lib/database';

function Catalogue() {
  const ourVideoIds = savedVideos.map((video) => video.yt_id);
  // console.log(ourVideoIds);
  const [catalogue, setCatalogue] = React.useState(ourVideoIds);

  const id = `&id=qz0aGYrrlhU&id=hQAHSlTtcmY&id=PkZNo7MFNFg`;
  const ourVideoIdsUrl = savedVideos
    .map((video) => `&id=${video.yt_id}`)
    .join('');
  console.log(ourVideoIdsUrl);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const details = `snippet%2CcontentDetails%2Cstatistics`;
  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=qz0aGYrrlhU&id=hQAHSlTtcmY&id=PkZNo7MFNFg&key=${apiKey}`;

  return (
    <>
      <h4>This is our catalogue</h4>
      {ourVideoIds.map((yt_id) => (
        <div>
          <p>{yt_id}</p>
          <iframe src={`https://www.youtube.com/embed/${yt_id}`}></iframe>
        </div>
      ))}
    </>
  );
}

export { Catalogue };
