import { AiOutlineUser } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi2";
import { GoTrash } from "react-icons/go";
import style from "./Contact.module.css";

const Contact = ({ item, onDeleteContact }) => {
  return (
    <li className={style.wrapper}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <AiOutlineUser className={style.icon} />
          <span className={style.span}>{item.name}</span>
        </li>
        <li className={style.listItem}>
          <HiOutlinePhone className={style.icon} />
          <span className={style.span}>{item.number}</span>
        </li>
      </ul>
      <button
        className={style.btn}
        type="button"
        onClick={() => onDeleteContact(item.id)}
      >
        <GoTrash />
      </button>
    </li>
  );
};

export default Contact;
