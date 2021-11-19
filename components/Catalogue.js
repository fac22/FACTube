import React from 'react';
// import Videos from './Videos';
import { ourVideos } from '../lib/database';

function Catalogue() {
  // const [catalogue, setCatalogue] = React.useState();

  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const details = `snippet%2CcontentDetails%2Cstatistics`;
  const ourVideoIds = ourVideos.map((video) => `&id=${video.yt_id}`).join('');

  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet${ourVideoIds}&key=${apiKey}`;

  const loadCatalogue = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCatalogue(data);
      });
  };
  // loadCatalogue();  Bad!!! Maxxes out API key

  return (
    <>
      <h4>This is our catalogue</h4>
      {/* <Videos data={catalogue} /> */}
      {/* {ourVideoIds.map((yt_id) => (
        <div>
          <p>{yt_id}</p>
          <iframe src={`https://www.youtube.com/embed/${yt_id}`}></iframe>
        </div>
      ))} */}
    </>
  );
}

export { Catalogue };
