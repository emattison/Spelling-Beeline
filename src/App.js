import "./App.css";
import Word from "./Word.js";
import SpellingWords from "./SpellingList.json";
import { useState } from "react";

function App() {
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(-1);
  const [selectedListIndex, setSelectedListIndex] = useState(-1);

  const createSpellingWords = (words) => {
    return words.map((w, i) => <Word key={w} isActive={i == 0}>{w}</Word>);
  };

  const createGradeList = (grades) => {
    return grades.map((g, i) => (
      <option key={"gradeOption" + i}>{g.Grade}</option>
    ));
  };

  const createSpellingLists = (lists) => {
    return lists.map((l, i) => (
      <option key={"listOption" + i}>{l.Name}</option>
    ));
  };

  const onGradeSelected = (e) => {
    setSelectedGradeIndex(e.target.selectedIndex-1);
  };

  const onSpellingListSelected = (e) => {
    setSelectedListIndex(e.target.selectedIndex-1);
  };

  const getSpellingList = (index) => {
    return index < 0 ? [] : SpellingWords.Grades[index].Lists;
  };

  const getSpellingWords = (gradeIndex, listIndex) => {
    return gradeIndex < 0 || listIndex < 0 ? [] : SpellingWords.Grades[gradeIndex].Lists[listIndex].Words;
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Spelling Beeline</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"></li>
        </ul>
        <span className="navbar-text">Eric</span>
      </header>
      <div className="App">
        <select className="form-select w-50" onChange={onGradeSelected} defaultValue="-1">
          <option>Select Grade Level</option>
          {createGradeList(SpellingWords.Grades)}
        </select>
        <select className="form-select w-50" defaultValue="-1" disabled={selectedGradeIndex < 0} onChange={onSpellingListSelected}>
        <option>Select Spelling List</option>
          {createSpellingLists(getSpellingList(selectedGradeIndex))}
        </select>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {createSpellingWords(getSpellingWords(selectedGradeIndex, selectedListIndex))}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
