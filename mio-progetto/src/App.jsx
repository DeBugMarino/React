import "./App.css";
import Counter from "./counter";
import CounterDisplay from "./CounterDisplay";

function App() {
  return (
    <>
      <CounterDisplay counter={Counter} />
      <Counter />
    </>
  );
}

export default App;
