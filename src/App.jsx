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
import Modal from 'react-modal';

const App = () => {
  Modal.setAppElement('#root');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState('');
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setPage(1);
  };

  const onLoad = () => {
    setPage(prev => prev + 1);
    console.log('click');
  };

  const openModal = data => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery items={photos} onImgClick={openModal} />
      )}
      {photos.length > 0 && photos.length < total && (
        <LoadMoreBtn onLoadMore={onLoad} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        modalData={modalData}
      />
    </>
  );
};

export default App;
