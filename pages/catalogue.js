import React from 'react';
import { getAllVideos } from '../lib/model';

// getAllVideos().then((data) => console.log(data));
let array = [];
// console.log(getAllVideos());

const Catalogue = () => {
  console.log(getAllVideos());
  //   const allVideo = getAllVideos().then((data) => console.log(data));

  //   Promise.all([getAllVideos()]).then((values) => {
  //     console.log('values result:', values[0]);
  //     // values.map((video) => array.push(...video));
  //     // console.log(result);
  //     // return result;
  //   });
  //   console.log(array);

  //   console.log('allVideo', allVideo);

  return <div>hello</div>;
};

export default Catalogue;
