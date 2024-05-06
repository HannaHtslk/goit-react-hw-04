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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async query => {
    try {
      setPhotos([]);
      setError(false);
      setLoading(true);

      const data = await fetchPhotosByQuery(query);

      setPhotos(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery items={photos} />}
    </>
  );
};

export default App;
