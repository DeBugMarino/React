import "./App.css";
import Colors from "./Colors";

function App() {
  const colorArray = [
    { id: 1, name: "Red" },
    { id: 2, name: "White" },
    { id: 3, name: "Black" },
    { id: 4, name: "Blue" },
    { id: 5, name: "Yellow" },
  ];
  return (
    <>
      <Colors colors={colorArray} />
    </>
  );
}

export default App;
