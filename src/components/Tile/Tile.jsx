import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import style from "./tile.module.css";

export default function Tile() {
  const [items, setItems] = useState([]); // Состояние для изначального списка слов
  const [isEnglish, setisEnglish] = useState(true); // Управляет языком отображения

  // Получаем данные из localStorage при загрузке компонента
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("words")) || [];
    setItems(savedItems);
  }, []);

  // Обработчик переключения радио-кнопок
  const handleLanguageChange = (e) => {
    setisEnglish(e.target.value === "english");
  };

  return (
    <div>
      <form className={style.radioForm}>
        <label>
          <input
            type="radio"
            name="language"
            value="english"
            onChange={handleLanguageChange}
          />
          Show all ENGLISH
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="russian"
            onChange={handleLanguageChange}
          />
          Show all RUSSIAN
        </label>
      </form>
      <div className={style.wrapper__tile}>
        {items.map((card) => (
          <FlashCard key={card.id} {...card} isEnglish={isEnglish} />
        ))}
      </div>
    </div>
  );
}
