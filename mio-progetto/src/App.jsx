import "./App.css";
import Counter from "./counter";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <Counter initialValue={0} incrementAmount={2} />
    </>
  );
}

export default App;
