import React from "react";
import Button from "../Button/Button";
import styles from "./addWord.module.css";

export default function AddWord({
  newWordEnglish,
  newWordTranscr,
  newWordRussian,
  setNewWordEnglish,
  setNewWordTranscr,
  setNewWordRussian,
  handleAdd,
}) {
  return (
    <div className={styles.newword}>
      <h2>Add new word</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="english"
          placeholder="Enter english word"
          value={newWordEnglish}
          onChange={(e) => setNewWordEnglish(e.target.value)}
        />
        <input
          type="text"
          name="transcription"
          placeholder="Enter transcription"
          value={newWordTranscr}
          onChange={(e) => setNewWordTranscr(e.target.value)}
        />
        <input
          type="text"
          name="russian"
          placeholder="Enter russian word"
          value={newWordRussian}
          onChange={(e) => setNewWordRussian(e.target.value)}
        />
        <Button text="Add" color="btnGrassGreen" handler={handleAdd} />
      </form>
    </div>
  );
}

// Такой код короче
// export default function AddWord({ newWord, setNewWord, handleAdd }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewWord((prev) => ({ ...prev, [name]: value })); // Обновляем значение в `newWord`
//   };

//   return (
//     <div className={styles.newword}>
//       <h2>Add new word</h2>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="text"
//           name="english"
//           placeholder="Enter english word"
//           value={newWord.english}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="transcription"
//           placeholder="Enter transcription"
//           value={newWord.transcription}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="russian"
//           placeholder="Enter russian word"
//           value={newWord.russian}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="tags"
//           placeholder="Enter theme"
//           value={newWord.tags}
//           onChange={handleChange}
//         />
//         <Button text="Add" color="btnGrassGreen" handler={handleAdd} />
//       </form>
//     </div>
//   );
// }
