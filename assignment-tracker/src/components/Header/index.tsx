import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

interface HeaderProps {
  onAddAssignment: (assignment: string) => void;
}

export function Header({ onAddAssignment }: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onAddAssignment(inputValue);
      setInputValue("");
    }
  };

  const isButtonDisabled = inputValue.trim() === ""; // Check if input value is empty
  const buttonStyle = isButtonDisabled ? { backgroundColor: "gray", cursor: "default" } : {};

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleButtonClick}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" style={buttonStyle}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
