import { useState } from "react";
import { readJsonSpellingWordGrades } from "./SpellingWordUtilities";

function Grade() {
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(-1);
  const [selectedListIndex, setSelectedListIndex] = useState(-1);

  const createGradeList = (grades) => {
    return grades.map((g, i) => (
      <button key={g.Grade} data={g.Grade} type="button" className="btn btn-primary mx-1 fs-1" onClick={onGradeSelected}>
        {g.GradeName}
      </button>
    ));
  };

  const createSpellingLists = (lists) => {
    return lists.map((l, i) => <option key={"listOption" + i}>{l.Name}</option>);
  };

  const onGradeSelected = (e) => {
    window.location = "/Grade/" + e.target.attributes["data"].value + "/List";
    console.log("Test");
  };

  return (
    <>
      <div className="container">
        <div className="fs-1">Choose a Grade:</div>
        {createGradeList(readJsonSpellingWordGrades())}
      </div>
    </>
  );
}

export default Grade;
