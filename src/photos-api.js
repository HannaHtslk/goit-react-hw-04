import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

axios.defaults.headers.common['Authorization'] =
  'Client-ID dMJ_KHMWjEvU1C7Meu00xLPagPgk1I7NX3oO7Vi3SOw';

const fetchPhotosByQuery = async query => {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      per_page: 15,
    },
  });
  return response.data.results;
};
export default fetchPhotosByQuery;
