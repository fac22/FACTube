import React from 'react';
const YOUTUBE_API_KEY = 'AIzaSyDgoaw4-GM4V6YDPEAShzPSE7t0pWzBaGE';

function Videos({ searchTerm }) {
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${YOUTUBE_API_KEY}`;
  console.log('url', url);
  const [videoList, setVideoList] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState();

  React.useEffect(() => {
    if (searchTerm !== undefined) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setVideoList(data);
          return videoList;
        });
    }
  }, [searchTerm]);
  let listArr = videoList.items;
  console.log('listArr', listArr);
  return (
    <div>
      {/* //   <div className="video-list">
    //     {videoList.map((video) => (
    //       <div className="video-card" key={video.id.videoId}>
    //         <p>{video.snippet.title}</p>
    //         <h3>{video.snippet.channelTitle}</h3>
    //         <p>{video.snippet.description}</p>
    //         <iframe
    //           src={`https://www.youtube.com/embed/${video.id.videoId}`}
    //         ></iframe>
    //       </div>
    //     ))}
    //   </div> */}
    </div>
  );
}

export default Videos;
