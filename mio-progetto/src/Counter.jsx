import { useState } from "react";

export default function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }

  return (
    <div>
      <p>Contatore: {counter}</p>
      <button onClick={handleCounterIncrement}>Contiamo dai</button>
      <button onClick={handleCounterDecrement}>contiamo all'indietro</button>
    </div>
  );
}
