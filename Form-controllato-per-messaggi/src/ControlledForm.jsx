import { useState } from "react";

export function ControlledForm() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    setList([...list, text]);
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Write your name"
        onChange={handleChange}
      ></input>
      <button type="submit" onClick={handleClick}>
        Add text in the list
      </button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}> {value}</li>;
        })}
      </ul>
    </div>
  );
}
