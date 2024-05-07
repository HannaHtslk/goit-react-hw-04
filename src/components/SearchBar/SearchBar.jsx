import { IoIosSearch } from 'react-icons/io';
import s from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const queryWord = form.elements.query.value;

    if (queryWord.trim() === '') {
      toast.error('This field can not be empty!');
      return;
    }

    onSearch(queryWord);

    form.reset();
  };

  return (
    <header>
      <form className={s.wrapper} onSubmit={handleSubmit}>
        <div className={s.formWrapper}>
          <button className={s.btn}>
            <IoIosSearch className={s.icon} size="24" />
          </button>
          <input
            className={s.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
