import Head from 'next/head';
import Layout from '../components/Layout.js';
import Search from '../components/Search.js';
// import Videos from '../components/Videos.js';
import { ourVideos } from '../lib/database';

const Home = ({ catalogue }) => {
  return (
    <div>
      <Head>
        <title>FAC-Tube</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Search />
        {/* <Videos data={catalogue} /> */}
      </Layout>
    </div>
  );
};

// export async function getServerSideProps({ req, res }) {
//   const { data, error } = await supabase.from('Videos').select('*');
//   return {
//     props: {
//       data: data,
//       dataError: error,
//     },
//   };
// }

export async function getServerSideProps({ req, res }) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const details = `snippet%2CcontentDetails%2Cstatistics`;
  const ourVideoIds = ourVideos.map((video) => `&id=${video.yt_id}`).join('');

  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet${ourVideoIds}&key=${apiKey}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return {
        props: {
          catalogue: data,
        },
      };
    });
}

export default Home;
