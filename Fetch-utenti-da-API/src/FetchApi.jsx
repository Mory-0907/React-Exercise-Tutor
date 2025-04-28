import { useState, useEffect } from "react";

export function FetchApi() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setNames(data))
      .catch((error) => console.error(`Errore nel fetch:`, error));
  }, []);
  return (
    <ul>
      {names.map((value, index) => {
        return <li key={index}>{value.name}</li>;
      })}
    </ul>
  );
}
