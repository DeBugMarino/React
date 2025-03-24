import { useState } from "react";

export default function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  return (
    <div style={{ fontSize: 20, color: "red" }}>
      <h2> Contatore: {counter}</h2>
      <button onClick={handleCounterIncrement}>Contiamo dai</button>
    </div>
  );
}
