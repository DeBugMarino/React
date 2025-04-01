import { useCounter } from "react";

function useCounter(initialValue = 0) {
  const [
    counter,
    setCounter,
    handleDecrement,
    handleIncrement,
    handleCounterReset,
  ] = useCounter(initialValue);

  function handleIncrement() {
    setCounter((prev) => prev + 1);
  }

  function handleDecrement() {
    setCounter((prev) => prev - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return {
    counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleCounterReset,
  };
}

function Counter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Counter;
