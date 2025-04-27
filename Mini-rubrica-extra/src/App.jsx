import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("rubrica");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem('rubrica', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (newContacts) => {
    setContacts((oldContacts) => [...oldContacts, newContacts]);
  };
  

  return (
    <>
      <ContactForm data={addContacts} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
