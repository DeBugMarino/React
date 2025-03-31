import { useMemo } from "react";

export default function FilteredList({ oggetti }) {
  const filteredList = useMemo(
    () => oggetti.filter((x) => x.age > 18),
    [oggetti]
  );

  return (
    <div>
      <ul>
        {filteredList.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </div>
  );
}
