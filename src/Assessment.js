import { useParams } from "react-router-dom";
import SpellingWords from "./data/SpellingWords.json";
import Word from "./Word";

function List() {
  const { gradeName, listName } = useParams();

  const createSpellingWords = (words) => {
    return words.map((w, i) => (
      <Word key={w} isActive={i === 0} className="mx-auto">
        {w}
      </Word>
    ));
  };

  const createIndicators = (words) => {
    return words.map((w, i) => <li data-target="#wordCarousel" key={"indicator" + i} data-bs-slide-to={i} className={i === 0 ? "active" : ""}></li>);
  };

  const getSpellingWords = (gradeIndex, listIndex) => {
    return gradeIndex < 0 || listIndex < 0 ? [] : SpellingWords.Grades[gradeIndex].Lists[listIndex].Words;
  };

  return (
    <>
      <div id="wordCarousel" className="carousel slide">
        <button className="carousel-control-prev" type="button" data-bs-target="#wordCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <ol className="carousel-indicators">{createIndicators(getSpellingWords(gradeName, listName))}</ol>
        <div className="carousel-inner">{createSpellingWords(getSpellingWords(gradeName, listName))}</div>
        <button className="carousel-control-next" type="button" data-bs-target="#wordCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default List;
