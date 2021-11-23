import { supabase } from './initSupabase';

const getAllUsernames = async () => {
  const { data, error } = await supabase.from('profiles').select('username');
  console.log(data);
  return data;
};

const getUserId = () => {
  return !supabase.auth.user() ? 0 : supabase.auth.user().id;
};

// const getAllVideos = async () => {
//   const { data, error } = await supabase.from('videos').select('video_title');
//   console.log('model.js data result', data);
//   return data;
// };

const getAllVideos = async () => {
  const { data, error } = await supabase.from('videos').select();
  console.log(data);
  return data;
};

export { getAllUsernames, getUserId, getAllVideos };
