import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("aggiornamento data");
      setDate(new Date());
    }, 1000);
    return () => {
      console.log("puliamo");
      clearInterval(interval);
    };
  });
  return (
    <div>
      <h2>Che ore sono: {date.toLocaleTimeString()}</h2>;
    </div>
  );
}
