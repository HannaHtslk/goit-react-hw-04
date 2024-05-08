import { useEffect, useState } from 'react';
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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setLoading(true);
        const { results, total } = await fetchPhotosByQuery({
          query,
          page,
        });

        setPhotos(prev => [...prev, ...results]);
        setTotal(total);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSearch = search => {
    setQuery(search);
    setPhotos([]);
    setPage(0);
  };

  const onLoad = () => {
    setPage(prev => prev + 1);
    console.log('click');
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery items={photos} />}
      {photos.length > 0 && photos.length < total && (
        <LoadMoreBtn onLoadMore={onLoad} />
      )}
      {/* <ImageModal /> */}
    </>
  );
};

export default App;
