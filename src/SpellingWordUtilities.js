import SpellingWords from "./data/SpellingWords.json";

export function readJsonSpellingWordGrades() {
  const gradeProperties = Object.getOwnPropertyNames(SpellingWords.Grades);
  const grades = [];

  for (let index = 0; index < gradeProperties.length; index++) {
    const grade = gradeProperties[index];
    grades[index] = {
      Grade: grade,
      GradeName: SpellingWords.Grades[grade].Grade
    };
  }

  return grades;
}

export function readJsonSpellingWordLists(gradeName) {
  const listProperties = Object.getOwnPropertyNames(SpellingWords.Grades[gradeName].Lists);
  const lists = [];

  for (let index = 0; index < listProperties.length; index++) {
    const list = listProperties[index];
    lists[index] = {
      List: list,
      ListName: SpellingWords.Grades[gradeName].Lists[list].Name
    };
  }

  return lists;
}