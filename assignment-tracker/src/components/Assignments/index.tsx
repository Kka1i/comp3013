import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface AssignmentsProps {
  assignments: string[];
  onDeleteAssignment: (index: number) => void;
  onCheckAssignment: (index: number, checked: boolean) => void;
  checkedCount: number;
  ifChecked: boolean[];
}

export function Assignments({
  assignments,
  onDeleteAssignment,
  onCheckAssignment,
  checkedCount,
  ifChecked,
}: AssignmentsProps) {
  const handleDeleteAssignment = (index: number) => {
    onDeleteAssignment(index);
  };

  const handleCheckAssignment = (index: number, checked: boolean) => {
    onCheckAssignment(index, checked);
  };

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{checkedCount} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
          key={index}
          name={assignment}
          onDelete={() => handleDeleteAssignment(index)}
          onCheck={()=>handleCheckAssignment(index,ifChecked[index])}
          ifChecked={ifChecked[index]} 
        />
      ))}
    </div>
  </section>
);
}