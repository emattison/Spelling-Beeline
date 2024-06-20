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
