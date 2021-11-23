import { supabase } from './initSupabase';

const getUsers = async () => {
  const { data, error } = await supabase.from('profiles').select('username');
  console.log(data);
  return data;
};

export { getUsers };
