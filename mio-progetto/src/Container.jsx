import { useState } from "react";

export default function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div style={{ backgroundColor: "white", border: "2px solid red" }}>
      <div onClick={handleToggleCollapse}>{title}</div>
      <div style={{ display: collapsed ? "none" : "block" }}>{children}</div>
    </div>
  );
}
