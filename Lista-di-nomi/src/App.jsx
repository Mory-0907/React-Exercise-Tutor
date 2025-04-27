import { NameList } from "./NameList";

function App() {
  const nameLists = [
    { name: "Marco" },
    { name: "Giovanni" },
    { name: "Luca" },
    { name: "Sofia" },
  ];

  return (
    <>
      <NameList lists={nameLists} />
    </>
  );
}

export default App;
