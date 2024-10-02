import { useParams } from "react-router-dom";
import { readJsonSpellingWordLists } from "./SpellingWordUtilities";

function List() {
  const { gradeName } = useParams();

  const createGradeList = (grades) => {
    return grades.map((g, i) => (
      <button key={g.List} data={g.List} type="button" className="btn btn-primary mx-1 fs-1" onClick={onGradeSelected}>
        {g.ListName}
      </button>
    ));
  };

  const onGradeSelected = (e) => {
    window.location = "/Grade/" + gradeName+ "/List/" + e.target.attributes["data"].value;
    console.log("Test");
  };

  return (
    <>
      <div className="container">
        <div className="fs-1">Choose a List:</div>
        {createGradeList(readJsonSpellingWordLists(gradeName))}
      </div> 
    </>
  );
}

export default List;
