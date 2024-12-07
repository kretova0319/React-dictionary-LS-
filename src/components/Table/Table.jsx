import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import AddWord from "./AddWord";

function Table() {
  const [items, setItems] = useState([]); // Состояние для изначального списка слов
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
  }); // Новое слово

  // Получаем данные из localStorage при загрузке компонента
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("words")) || [];
    setItems(savedItems);
  }, []);

  // Удаление слова из списка
  const deleteItem = (id) => {
    const updatedItems = items.filter((word) => word.id !== id);
    setItems(updatedItems);
    localStorage.setItem("words", JSON.stringify(updatedItems)); // Сохраняем изменения
  };

  // Добавление нового слова
  const handleAdd = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы

    // Простая валидация
    if (!newWord.english || !newWord.transcription || !newWord.russian) {
      alert("All fields are required!");
      return;
    }

    const wordToAdd = {
      id: Math.random().toString(),
      ...newWord,
    };

    const updatedItems = [wordToAdd, ...items];
    setItems(updatedItems);
    localStorage.setItem("words", JSON.stringify(updatedItems)); // Сохраняем новое слово
    setNewWord({ english: "", transcription: "", russian: "" }); // Сбрасываем поля ввода
  };

  return (
    <div>
      <AddWord
        newWord={newWord}
        setNewWord={setNewWord}
        handleAdd={handleAdd} // Передаём функцию корректно
      />
      <table className="table">
        <caption>List of words</caption>
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {items.map((word) => (
            <TableRow
              key={word.id}
              rowData={word}
              handleDel={() => deleteItem(word.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
