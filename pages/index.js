import Search from '../components/Search.js';
import { supabase } from '../lib/initSupabase.js';
import Videos from '../components/Videos.js';

const Home = ({ videos }) => {
  return (
    <div>
      <title>FAC-Tube</title>
      <Search />
      {videos}
      {/* <Videos data={videos} /> */}
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const { data, error } = await supabase.from('videos').select();
  return {
    props: {
      videos: data,
      dataError: error,
    },
  };
}

// export async function getServerSideProps({ req, res }) {
//   const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
//   const details = `snippet%2CcontentDetails%2Cstatistics`;
//   const ourVideoIds = ourVideos.map((video) => `&id=${video.yt_id}`).join('');

//   let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet${ourVideoIds}&key=${apiKey}`;

//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return {
//         props: {
//           catalogue: data,
//         },
//       };
//     });
// }

export default Home;
