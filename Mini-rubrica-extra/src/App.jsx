import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("rubrica"))
  );
  useEffect(() => {
    localStorage.setItem("rubrica", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("rubrica"));
    setContacts(saved);
  }, []);

  const addContacts = (newContacts) => {
    setContacts((oldContacts) => [...oldContacts, newContacts]);
  };

  return (
    <>
      <ContactList contacts={contacts} />
      <ContactForm data={addContacts} />
    </>
  );
}

export default App;
