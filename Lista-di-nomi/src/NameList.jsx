export function NameList({ lists }) {
  return (
    <ul>
      {lists.map((nameList) => (
        <li>{nameList.name}</li>
      ))}
    </ul>
  );
}
