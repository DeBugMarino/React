import { useState } from "react";
import "./App.css";
import { LanguageContext } from "./Welcome";

function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }
  return (
    <div>
<LanguageContext.Provider value={language} />
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      <Welcome />
      </LanguageContext>
    </div>
  );
}

export default App;
