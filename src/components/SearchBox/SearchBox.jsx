import style from "./SearchBox.module.css";

const SearcBox = () => {
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        <span className={style.span}>Find contact by name</span>
        <input className={style.search} type="search" placeholder="Search..." />
      </label>
    </div>
  );
};

export default SearcBox;
