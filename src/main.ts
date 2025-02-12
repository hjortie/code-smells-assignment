import "./style.css";

/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number {
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump
  );
}
const jumpings = [1, 4, 56, 32, 7];
const jumpSum = getLength(jumpings);

console.log(jumpSum);

/*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  if (student.handedInOnTime === true) {
    student.passed = true;
  }

  if (student.passed) {
    return "VG";
  } else {
    return "IG";
  }
}

const elin = new Student("Elin", true, false);

const elinStatus = getStudentStatus(elin);
console.log(elinStatus);
