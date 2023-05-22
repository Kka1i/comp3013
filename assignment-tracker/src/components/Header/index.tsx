import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { formatDistanceToNow } from "date-fns";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface HeaderProps {
  onAddAssignment: (assignment: string, deadline?: Date) => void;
}

export function Header({ onAddAssignment }: HeaderProps) {
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showDayPicker, setShowDayPicker] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onAddAssignment(inputValue, selectedDate);
      setInputValue("");
      setSelectedDate(undefined);
    }
  };

  const isButtonDisabled = inputValue.trim() === ""; // Check if input value is empty
  const buttonStyle = isButtonDisabled ? { backgroundColor: "gray", cursor: "default" } : {};

  const handleDayPickerToggle = () => {
    setShowDayPicker(!showDayPicker);
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setShowDayPicker(false);
  };

  const getDeadlineText = (): string => {
    if (selectedDate) {
      const daysAway = formatDistanceToNow(selectedDate, { addSuffix: true });
      return daysAway;
    }
    return "";
  };

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
        <button type="button" className={styles.dayPickerButton} onClick={handleDayPickerToggle}>
          {selectedDate ? `Deadline: ${getDeadlineText()}` : "Pick a Deadline"}
        </button>
        {selectedDate && (
          <div className={styles.deadlineBubble}>
            Due {getDeadlineText()}
          </div>
        )}
        {showDayPicker && (
          <div className={styles.dayPickerContainer}>
            <DayPicker selected={selectedDate} onDayClick={handleDayClick} />
          </div>
        )}
      </form>
    </header>
  );
}
