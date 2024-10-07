import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./contacts.json";

const App = () => {
  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList items={contacts} />
      </div>
    </>
  );
};

export default App;
