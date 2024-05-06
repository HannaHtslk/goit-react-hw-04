import axios from 'axios';

axios.defaults.baseURL = '<https://api.unsplash.com';

const fetchPhotosByQuery = async query => {
  const response = await axios.get(`/search/photos?query=${query}`);
  return response.data.results;
};
export default fetchPhotosByQuery;
