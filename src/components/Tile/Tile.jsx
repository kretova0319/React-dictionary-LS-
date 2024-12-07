import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import style from "./tile.module.css";

export default function Tile() {
  const [items, setItems] = useState([]); // Состояние для изначального списка слов
  const [isEnglish, setisEnglish] = useState(true);

  // Получаем данные из localStorage при загрузке компонента
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("words")) || [];
    setItems(savedItems);
  }, []);

  const showEnglish = () => {
    setisEnglish(true);
  };

  const showRussian = () => {
    setisEnglish(false);
  };
  return (
    <div>
      <form>
        <input type="radio" name="language" value="1" onClick={showEnglish} />{" "}
        Show all ENGLISH
        <input
          type="radio"
          name="language"
          value="2"
          onClick={showRussian}
        />{" "}
        Show all RUSSIAN
      </form>
      <div className={style.wrapper__tile}>
        {items.map((card) => (
          <FlashCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
