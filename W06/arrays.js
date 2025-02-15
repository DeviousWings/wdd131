const steps = ["one", "two", "three"];
const listTemplate = (step) => `<li>${step}</li>`;

const stepsHtml = steps.map(listTemplate).join(""); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml; //set the innerHTML

const grades = ["A", "B", "C"];
const gradeToGPA = (grade) => {
  switch (grade) {
    case "A":
      return 4;
    case "B":
      return 3;
    case "C":
      return 2;
    case "D":
      return 1;
    case "F":
      return 0;
    default:
      return null;
  }
};

const gpaPoints = grades.map(gradeToGPA);
console.log(gpaPoints);
