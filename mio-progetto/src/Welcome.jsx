import { useContext } from "react";
import { LanguageContext } from "./languageContext";

export default function Hello() {
  const language = useContext(LanguageContext);
  return <h2>{language === "en" ? "Hello, World!" : "ciao, Mondo"}</h2>;
}
