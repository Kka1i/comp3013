import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState<string[]>([]);
  const [checkedCount, setCheckedCount] = useState<number>(0);
  const [ifChecked, setIfChecked] = useState<boolean[]>([]);

  const handleAddAssignment = (assignment: string) => {
    setAssignments([...assignments, assignment]);
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
    console.log(checked);
    if(checked) {
      const tempIfCheck = [...ifChecked];
      tempIfCheck[index] = !checked;
      setIfChecked(tempIfCheck);
      console.log(11111);
      console.log(ifChecked)
    }
    else {
      const tempIfCheck = [...ifChecked];
      tempIfCheck[index] = !checked;
      setIfChecked(tempIfCheck);
      console.log(222222);
      console.log(ifChecked)
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
        ifChecked = {ifChecked}
      />
    </>
  );
}

export default App;