import './App.css';
import Word from './Word.js';
import SpellingWords from './SpellingList.json'

function App() {
  const createSpellingWords = (words) => {
    return words.map(w => <Word key={w} >{w}</Word>);
  };

  const createSpellingLists = (lists) => {
    return lists.map(l => <h2>{l.Name}</h2>);
  };

  return (
    <div className="App">
      {createSpellingLists(SpellingWords.Lists)}
      {createSpellingWords(SpellingWords.Lists[0].Words)}
    </div>
  );
}

export default App;
