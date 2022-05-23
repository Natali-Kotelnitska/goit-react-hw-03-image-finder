import s from './Searchbar.module.css';
const Searchbar = ({ onSubmit }) => {
  return (
    <header className={s.searchbar}>
      <form className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
