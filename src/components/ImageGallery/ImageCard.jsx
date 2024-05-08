import s from './ImageCard.module.css';
import { FcLike } from 'react-icons/fc';
import { SlSocialInstagram } from 'react-icons/sl';

const ImageCard = ({ item, onClick }) => {
  const {
    likes,
    description,
    user: { instagram_username },
    urls: { small },
  } = item;

  return (
    <div className={s.card} onClick={onClick}>
      <div className={s.imgWrapper}>
        <img className={s.img} src={small} alt={description} />
      </div>
      <div className={s.contentWrapper}>
        <p className={s.likes}>
          <FcLike className={s.likeIcon} size="20" />
          {likes}
        </p>
        <p className={s.text}>
          {instagram_username && (
            <>
              <SlSocialInstagram className={s.instIcon} size="23" />
              {instagram_username}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
