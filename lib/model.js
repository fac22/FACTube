import { supabase } from './initSupabase';

const getAllUsernames = async () => {
  const { data, error } = await supabase.from('profiles').select('username');
  console.log(data);
  return data;
};

const getUserId = () => {
  return !supabase.auth.user() ? 0 : supabase.auth.user().id;
};

const getAllVideos = async () => {
  const { data, error } = await supabase.from('videos').select();
  return data;
};

export { getAllUsernames, getUserId, getAllVideos };
