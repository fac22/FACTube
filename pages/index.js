import { supabase } from '../lib/initSupabase.js';
import DbVideos from '../components/DbVideos.js';

const Home = ({ databaseVideos }) => {
  return (
    <>
      <title>FAC-Tube</title>
      {<DbVideos data={databaseVideos} />}
    </>

  );
};

export async function getServerSideProps() {
  let { data, error } = await supabase.from('videos').select();
  return {
    props: {
      databaseVideos: data,
      dataError: error,
    },
  };
}

export default Home;
