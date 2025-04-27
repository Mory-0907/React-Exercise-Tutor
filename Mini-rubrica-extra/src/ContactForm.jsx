import { useState } from "react";

export function ContactForm({ data }) {
  const [username, setName] = useState("");
  const [number, setNumber] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    data({ username, number });

    setName("");
    setNumber("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={(event) => setName(event.target.value)}
          value={username}
        />
        <input
          type="number"
          onChange={(event) => setNumber(event.target.value)}
          value={number}
        />
        <button type="submit"> Invia </button>
      </form>
    </div>
  );
}
