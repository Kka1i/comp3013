import styles from "./assignment.module.css";
import { TbTrash} from "react-icons/tb";
import { useState } from "react";
import {AiFillCheckCircle} from "react-icons/ai"

interface AssignmentProps {
  name: string;
  onDelete: () => void;
  onCheck: (checked: boolean) => void;
  ifChecked: boolean;
}

export function Assignment({ name, onDelete, onCheck, ifChecked }: AssignmentProps) {
  
  const handleDelete = () => {
    onDelete();
    if (ifChecked) {
      onCheck(false);
      
    }
    else {
      
    }
  };

  const handleCheck = () => {
    onCheck(ifChecked);
  };

  return (
    <div className={styles.assignment}>
      <button className={ifChecked ? styles.checkContainer: styles.checkContainer} onClick={handleCheck}>
        {ifChecked ? <AiFillCheckCircle size={20} /> : <div />}
      </button>

      <p className = {ifChecked ? styles.textCompleted :""}>{name}</p>

      <button className={styles.deleteButton} onClick={handleDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
