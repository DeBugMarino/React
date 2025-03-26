import { createContext } from "react";

export const LanguageContext = createContext("en");

export default function Hello() {
  return (
    <div>
      <LanguageContext.Provider value="en">
        <h2>Hello, World!</h2>
      </LanguageContext>
    </div>
  );
}
