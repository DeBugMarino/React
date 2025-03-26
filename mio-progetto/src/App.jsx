import { useState } from "react";
import "./App.css";
import { LanguageContext } from "./Welcome";

function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }
  return (
    <>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>IT</button>
      <Welcome />
      <LanguageContext.Provider value="en" />
    </>
  );
}

export default App;
