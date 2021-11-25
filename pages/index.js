import { supabase } from '../lib/initSupabase.js';
import { getUserId } from '../lib/model.js';
import DbVideos from '../components/DbVideos.js';

const Home = ({ databaseVideos }) => {
  return (
    <>
      <title>FAC-Tube</title>
      {<DbVideos data={databaseVideos} />}
    </>
  );
};

// This wont work as serverSideProp:
// const user_id = getUserId();
export async function getServerSideProps() {
  let { data: videos, error: videosError } = await supabase
    .from('videos')
    .select();
  let { data: likes, error: likesError } = await supabase
    .from('likes')
    .select();

  return {
    props: {
      databaseVideos: videos,
      dataError: videosError,
      // userId: user_id,
      myLikes: likes,
      likesError: likesError,
    },
  };
}

export default Home;
