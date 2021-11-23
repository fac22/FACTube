import React from 'react';
import { getAllVideos } from '../lib/model';

// getAllVideos().then((data) => console.log(data));

const Catalogue = () => {
  //   const allVideos = getAllVideos()
  //     .then((data) => data)
  //     .then((data) => console.log('all video result ->', data));

  const allVideos = getAllVideos().then((data) => data);
  //   let promise = new Promise.resolve(allVideos);
  //   const data = allVideos.map((video) => video);
  console.log(promise);

  return <div>{}</div>;
};

export default Catalogue;
