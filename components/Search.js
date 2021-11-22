import React, { useState } from 'react';
import Videos from './Videos';
import SortByDate from './SortByDate';
import TextField from '@mui/material/TextField';

const Search = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [videos, setVideos] = useState(null);
  // const [warning, setWarning] = useState(false);
  // const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!searchTerm) {
  //     setWarning(true);
  //     return;
  //   }
  //   let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&key=${apiKey}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setVideos(data.items);
  //       setSearchTerm(null);
  //     });

  //   event.target.reset();
  // };

  // return (
  //   <>
  //     <form onSubmit={handleSubmit}>
  //       <TextField
  //         onChange={(e) => {
  //           setWarning(false);
  //           setSearchTerm(e.target.value);
  //         }}
  //         label="search"
  //         variant="outlined"
  //       />
  //       {videos && <SortByDate videos={videos} setVideos={setVideos} />}
  //     </form>

  //     {warning && <p>Please insert a term</p>}
  //     {videos && <Videos data={videos} />}
  //</>
  return <Videos data={Videos} />;
};

export default Search;
