import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState<{ content: string; deadline?: Date }[]>([]);
  const [checkedCount, setCheckedCount] = useState<number>(0);
  const [ifChecked, setIfChecked] = useState<boolean[]>([]);

  const handleAddAssignment = (assignment: string, deadline?: Date) => {
    setAssignments([...assignments, { content: assignment, deadline }]);
    setIfChecked([...ifChecked, false]);
  };

  const handleDeleteAssignment = (index: number) => {
    const updatedAssignments = [...assignments];
    updatedAssignments.splice(index, 1);
    setAssignments(updatedAssignments);

    const updatedIfChecked = [...ifChecked];
    updatedIfChecked.splice(index, 1);
    setIfChecked(updatedIfChecked);
  };

  const handleCheckAssignment = (index: number, checked: boolean) => {
    setCheckedCount(!checked ? checkedCount + 1 : checkedCount - 1);
    if (checked) {
      const tempIfCheck = [...ifChecked];
      tempIfCheck[index] = !checked;
      setIfChecked(tempIfCheck);
    } else {
      const tempIfCheck = [...ifChecked];
      tempIfCheck[index] = !checked;
      setIfChecked(tempIfCheck);
    }
  };

  return (
    <>
      <Header onAddAssignment={handleAddAssignment} />
      <Assignments
        assignments={assignments}
        onDeleteAssignment={handleDeleteAssignment}
        onCheckAssignment={handleCheckAssignment}
        checkedCount={checkedCount}
        ifChecked={ifChecked}
      />
    </>
  );
}

export default App;
