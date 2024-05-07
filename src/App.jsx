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
  const [page, setPage] = useState(0);

  const handleSearch = async query => {
    try {
      const { results } = await fetchPhotosByQuery({
        query,
        page,
      });

      // setPhotos(prev => [...prev, ...results]);
      setPhotos(results);
    } catch (error) {
      console.log(error);
    }
  };

  const onLoad = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {/* {loading && <Loader />}
      {error && <ErrorMessage />} */}
      {photos.length > 0 && <ImageGallery items={photos} />}
      {photos.length > 0 && <LoadMoreBtn onLoadMore={onLoad} />}
    </>
  );
};

export default App;
