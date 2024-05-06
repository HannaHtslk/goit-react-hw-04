import { IoIosSearch } from 'react-icons/io';
import s from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const queryWord = form.elements.query.value;

    if (queryWord.trim() === '') {
      alert('Enter something');
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
    </header>
  );
};

export default SearchBar;
