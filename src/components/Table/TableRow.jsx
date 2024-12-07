import React from "react";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./table.css";
import "../Button/button.module.css";
import useValidation from "../../../src/Hooks/useValidation";

export default function TableRow({ rowData, handleDel }) {
  const {
    inputErrorText,
    isInputError,
    isDisabled,
    setIsDisabled,
    validateField,
  } = useValidation();
  const { id, english, transcription, russian } = rowData;
  const [isClicked, setIsClicked] = useState(false);

  const [value, setValue] = useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
  });

  useEffect(() => {
    if (
      isInputError.english ||
      isInputError.transcription ||
      isInputError.russian
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isInputError]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    validateField(name, value);
    setValue((prevValue) => {
      return { ...prevValue, [name]: value.trim() };
    });
  }

  const handleEdit = () => {
    setIsClicked((prevValue) => !prevValue);
  };

  const handleCancel = () => {
    setValue({ ...rowData });
    setIsClicked((prevValue) => !prevValue);
  };

  const handleSave = () => {
    setValue({ ...value });
    setIsClicked((prevValue) => !prevValue);
  };

  return (
    <tr>
      {isClicked ? (
        <>
          <td>
            <input
              type="text"
              name={"english"}
              value={value.english}
              onChange={handleChange}
            />
            {inputErrorText.english && isInputError.english && (
              <p className="error">{inputErrorText.english}</p>
            )}
          </td>
          <td>
            <input
              type="text"
              name={"transcription"}
              value={value.transcription}
              onChange={handleChange}
            />
            {inputErrorText.transcription && isInputError.transcription && (
              <p className="error">{inputErrorText.transcription}</p>
            )}
          </td>
          <td>
            <input
              type="text"
              name={"russian"}
              value={value.russian}
              onChange={handleChange}
            />
            {inputErrorText.russian && isInputError.russian && (
              <p className="error">{inputErrorText.russian}</p>
            )}
          </td>
          <td className="table__btns">
            <Button
              text="Save"
              color="btnGreen"
              handler={handleSave}
              handleDisabled={isDisabled}
            />
            <Button text="Cancel" color="btnBlue" handler={handleCancel} />
          </td>
        </>
      ) : (
        <>
          <td>{value.english}</td>
          <td>{value.transcription}</td>
          <td>{value.russian}</td>
          <td className="table__btns">
            <Button text="Edit" color="btnYellow" handler={handleEdit} />
            <Button text="Delete" color="btnRed" handler={handleDel} id={id} />
          </td>
        </>
      )}
    </tr>
  );
}
