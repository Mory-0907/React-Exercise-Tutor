export function ContactList({ contacts }) {
  return (
    <div>
      <h2>List Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.username} - {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
