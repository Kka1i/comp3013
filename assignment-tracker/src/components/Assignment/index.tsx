import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";

interface AssignmentProps {
  name: string;
  deadline?: Date;
  onDelete: () => void;
  onCheck: (checked: boolean) => void;
  ifChecked: boolean;
}

export function Assignment({ name, deadline, onDelete, onCheck, ifChecked }: AssignmentProps) {
  const handleDelete = () => {
    onDelete();
    if (ifChecked) {
      onCheck(false);
    }
  };

  const handleCheck = () => {
    onCheck(ifChecked);
  };

  const getDeadlineText = (): string => {
    if (deadline) {
      const daysAway = formatDistanceToNow(deadline, { addSuffix: true });
      return daysAway;
    }
    return "";
  };

  const isDeadlineLessThan24Hours = deadline && deadline.getTime() < new Date().getTime() + 24 * 60 * 60 * 1000;

  return (
    <div className={styles.assignment}>
      <button className={ifChecked ? styles.checkContainer : styles.checkContainer} onClick={handleCheck}>
        {ifChecked ? <AiFillCheckCircle size={20} /> : <div />}
      </button>

      <p className={ifChecked ? styles.textCompleted : ""}>
        {name}
        {deadline && (
          <span
            className={`${styles.deadlineBubble} ${isDeadlineLessThan24Hours ? styles.redBorder : ""}`}
          >
            {getDeadlineText()}
          </span>
        )}
      </p>

      <button className={styles.deleteButton} onClick={handleDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
