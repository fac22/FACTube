import React from 'react';
import Videos from '../components/Videos';
import SortByDate from './SortByDate';

function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [videos, setVideos] = React.useState(null);
  const [warning, setWarning] = React.useState(false);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm) {
      setWarning(true);
      return;
    }
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
        setSearchTerm(null);
      });
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          aria-label="Search videos"
          placeholder="Search videos"
          name="search"
          id="search"
          value={searchTerm}
          onChange={(e) => {
            setWarning(false);
            setSearchTerm(e.target.value);
          }}
        />
        <button type="submit">Search</button>
        {videos && <SortByDate videos={videos} setVideos={setVideos} />}
      </form>
      {warning && <p>Please insert a term</p>}
      {videos && <Videos data={videos} />}
    </>
  );
}

export default Search;
