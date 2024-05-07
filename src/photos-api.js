import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

axios.defaults.headers.common['Authorization'] =
  'Client-ID dMJ_KHMWjEvU1C7Meu00xLPagPgk1I7NX3oO7Vi3SOw';

const fetchPhotosByQuery = async params => {
  const { data } = await axios.get('/search/photos', {
    params: {
      ...params,
    },
  });

  return data;
};
export default fetchPhotosByQuery;
