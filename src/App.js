import "./App.css";
import Word from "./Word.js";
import SpellingWords from "./SpellingList.json";

function App() {
  const createSpellingWords = (words) => {
    return words.map((w) => <Word key={w}>{w}</Word>);
  };

  const createSpellingLists = (lists) => {
    return lists.map((l, i) => <option key={"option" + i}>{l.Name}</option>);
  };

  return (
    <div className="App">
      <select className="form-select w-25" aria-label="Default select example">
        {createSpellingLists(SpellingWords.Lists)}
      </select>
    </div>
  );
}

export default App;
