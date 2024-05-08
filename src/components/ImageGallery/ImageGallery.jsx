import ImageCard from './ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ items, onImgClick }) => {
  return (
    <ul className={s.list}>
      {items.map(item => {
        return (
          <li className={s.item} key={item.id}>
            <ImageCard item={item} onClick={() => onImgClick(item)} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
