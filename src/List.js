import { useParams } from "react-router-dom";
import SpellingWords from "./data/SpellingWords.json"
import Word from "./Word";

function List() {
  const { gradeName, listName } = useParams();

  const createSpellingWords = (words) => {
    return words.map((w, i) => (
      <Word key={w} isActive={i === 0}>
        {w}
      </Word>
    ));
  };

  const getSpellingWords = (gradeIndex, listIndex) => {
    return gradeIndex < 0 || listIndex < 0 ? [] : SpellingWords.Grades[gradeIndex].Lists[listIndex].Words;
  };

  return (
    <div id="wordCarousel" className="carousel slide">
      <div className="carousel-inner">{createSpellingWords(getSpellingWords(gradeName, listName))}</div>
      <button class="carousel-control-prev" type="button" data-bs-target="#wordCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#wordCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default List;
