import "./App.css";
import Word from "./Word.js";
import SpellingWords from "./SpellingList.json";
import { useState } from "react";

function App() {
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(0);

  const createSpellingWords = (words) => {
    return words.map((w) => <Word key={w}>{w}</Word>);
  };

  const createGradeList = (grades) => {
    return grades.map((g, i) => <option key={"gradeOption" + i}>{g.Grade}</option>);
  };

  const createSpellingLists = (lists) => {
    return lists.map((l, i) => <option key={"listOption" + i}>{l.Name}</option>);
  };

  const onGradeSelected = (e) => {
    setSelectedGradeIndex(e.target.selectedIndex);
  };

  return (
    <div className="App">
      <select className="form-select w-25" onChange={onGradeSelected}>
        {createGradeList(SpellingWords.Grades)}
      </select>
      <select className="form-select w-25" aria-label="Default select example">
        {createSpellingLists(SpellingWords.Grades[selectedGradeIndex].Lists)}
      </select>
    </div>
  );
}

export default App;
