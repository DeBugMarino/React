import "./App.css";

import React from "react";
import FilteredList from "./FilteredList";
import useCounter from "./useCounter";

export default function App() {
  const { counter, increment, decrement, reset } = useCounter(0);

  const oggetti = [
    { name: "Aldo", id: 1, age: 21 },
    { name: "Giovanni", id: 2, age: 22 },
    { name: "Giacomo", id: 3, age: 23 },
    { name: "Giacomino", id: 4, age: 15 },
  ];

  return (
    <div>
      <h1>Contatore: {counter}</h1>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Reset</button>

      <h2>Lista Filtrata</h2>
      <FilteredList oggetti={oggetti} />
    </div>
  );
}
