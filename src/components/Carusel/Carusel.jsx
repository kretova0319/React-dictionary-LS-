import React, { useState, useEffect } from "react";
import Card from "../Cards/Card";
// import { data } from "../../data";
import CardWrapper from "../CardWrapper/CardWrapper";
import styles from "./carusel.module.css";

export default function Carusel() {
  const [items, setItems] = useState([]); // Состояние для изначального списка слов

  const [position, setPosition] = useState(0);

  const [pressed, setPressed] = useState(false);
  const [count, setCount] = useState(0);

  // Получаем данные из localStorage при загрузке компонента
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("words")) || [];
    setItems(savedItems);
  }, []);

  // Проверяем текущий элемент
  const currentItem = items[position] || {};
  const { english, transcription, russian } = currentItem;

  //Посчитать и вывести количество проверенных карточек
  function handleClick() {
    setPressed(!pressed);
    setCount(count + 1);
  }
  // Показать предыдущую карточку
  const showPreviousCard = () => {
    if (position === 0) {
      setPosition(items.length - 1);
      setPressed(false);
    } else {
      setPosition(position - 1);
      setPressed(false);
    }
  };
  // Показать следующую карточку
  const showNextCard = () => {
    if (position === items.length - 1) {
      setPosition(0);
      setPressed(false);
    } else {
      setPosition(position + 1);
      setPressed(false);
    }
  };

  return items.length > 0 ? (
    <div>
      <h1>Количество карточек, изученных сегодня: {count}</h1>
      <CardWrapper
        showPreviousCard={showPreviousCard}
        showNextCard={showNextCard}
      >
        <Card
          key={position.id}
          english={english}
          transcription={transcription}
          russian={russian}
          pressed={pressed}
          handleClick={handleClick}
        />
      </CardWrapper>
      <div className={styles.number}>
        {position + 1}/{items.length}
      </div>
    </div>
  ) : (
    <p>Загрузка данных</p>
  );
}
