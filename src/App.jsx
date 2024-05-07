import { useState } from 'react';
import {
  ErrorMessage,
  ImageGallery,
  ImageModal,
  Loader,
  LoadMoreBtn,
  SearchBar,
} from './index.js';
import fetchPhotosByQuery from './photos-api.js';

const App = () => {
  const [photos, setPhotos] = useState([]);

  const handleSearch = async query => {
    try {
      const data = await fetchPhotosByQuery(query);

      setPhotos(prev => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {/* {loading && <Loader />}
      {error && <ErrorMessage />} */}
      {photos.length > 0 && <ImageGallery items={photos} />}
    </>
  );
};

export default App;
