import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { TbEyeClosed } from 'react-icons/tb';

const ImageModal = ({ isOpen, onRequestClose, modalData }) => {
  if (!modalData) {
    return null;
  }

  const {
    urls: { regular },
    description,
  } = modalData;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button className={s.btn} onClick={onRequestClose}>
        <TbEyeClosed className={s.icon} size="30" />
      </button>

      <img src={regular} alt={description} className={s.image} />
    </Modal>
  );
};

export default ImageModal;
