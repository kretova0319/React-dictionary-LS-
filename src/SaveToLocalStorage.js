import { useEffect } from "react";

export default function SaveToLocalStorage({ data }) {
  const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("Saved to Local Storage", value);
  };

  useEffect(() => {
    saveData("words", data);
  }, []);
}
