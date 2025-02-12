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

/*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */

class Temp {
  constructor(
    public location: string,
    public date: Date,
    public temperature: number
  ) {}
}

function averageWeeklyTemperature(readings: Temp[]) {
  const oneWeekAgo = Date.now() - 604800000;
  const relevantReadings = readings.filter(
    (reading) =>
      reading.location === "Stockholm" && reading.date.getTime() > oneWeekAgo
  );

  const weeklyTemp = relevantReadings.reduce(
    (sum, r) => sum + r.temperature,
    0
  );

  return weeklyTemp / 7;
}
