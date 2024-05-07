import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div>
      <button onClick={onLoadMore} className={s.btn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
