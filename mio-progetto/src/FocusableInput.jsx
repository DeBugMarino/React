import { useEffect } from "react";
import { useRef } from "react";

export default function FocusableInput() {
  const muontedRef = useRef(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!muontedRef.current) {
      muontedRef.current = true;
      console.log("Mounting for the first time");
    } else {
      console.log("debug");
    }
  }, []);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
