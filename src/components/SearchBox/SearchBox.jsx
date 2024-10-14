import style from "./SearchBox.module.css";

const SearchBox = ({ value, onSearchChange }) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        <span className={style.span}>Find contact by name</span>
        <input
          className={style.search}
          type="search"
          value={value}
          onChange={onSearchChange}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
