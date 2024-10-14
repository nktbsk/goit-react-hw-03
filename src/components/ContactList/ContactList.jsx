import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ items, onDeleteContact }) => {
  const contactItems = Array.isArray(items) ? items : items.items;

  return (
    <ul className={style.list}>
      {contactItems.map((item) => (
        <Contact key={item.id} item={item} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
