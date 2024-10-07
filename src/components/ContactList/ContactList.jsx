import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ items }) => {
  const contactItems = Array.isArray(items) ? items : items.items;

  return (
    <ul className={style.list}>
      <Contact items={contactItems} />
    </ul>
  );
};

export default ContactList;
