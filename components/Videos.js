import React from 'react';
let YOUTUBE_API_KEY;

function Videos({ searchTerm }) {

  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key=${YOUTUBE_API_KEY}`;

  const [videoList, setVideoList] = React.useState([]);
  // const [searchValue, setSearchValue] = React.useState();

  React.useEffect(() => {
    if (searchTerm) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setVideoList(data);
          return videoList;
        });
    }
  }, [searchTerm]);


  console.log('videoList', videoList);
  let listArr = videoList.items;

  const warning = <p>Please insert a term to search!</p>;

  return (
    <div>
      <div className="video-list">
        {listArr
          ? listArr.map((video) => (
              <div className="video-card" key={video.id.videoId}>
                <p>{video.snippet.title}</p>
                <h3>{video.snippet.channelTitle}</h3>
                <p>{video.snippet.description}</p>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                ></iframe>
              </div>
            ))
          : warning}
      </div>
    </div>
  );
}

export default Videos;
