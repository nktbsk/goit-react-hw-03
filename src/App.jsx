import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactsData from "./contacts.json";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      return parsedContacts.length > 0 ? parsedContacts : contactsData;
    }
    return contactsData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const handleAddContact = (newContact) => {
    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (duplicate) {
      alert(`${newContact.name} вже є у списку контактів`);
      return;
    }

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox value={filter} onSearchChange={handleSearchChange} />
        <ContactList
          items={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
};

export default App;
