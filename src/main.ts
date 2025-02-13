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

//testing
const jumpings = [1, 4, 56, 32, 7];

console.log(getLength(jumpings));

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
  if (student.handedInOnTime) {
    student.passed = true;
  }

  if (student.passed) {
    return "VG";
  } else {
    return "IG";
  }
}

//testing
const elin = new Student("Elin", true, false);
const lukas = new Student("Lukas", false, false);

console.log(getStudentStatus(elin));

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

/*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
type Product = {
  name: string;
  image: string;
  price: number;
  description: string;
};

function showProduct(product: Product) {
  let container = document.createElement("div");

  container.innerHTML = `<h4>${product.name}</h4>
  <img src="${product.image}" alt="${product.name}"/>
        <strong>${product.price} USD</strong>
        <p>${product.description}</p>`;
  document.getElementById("app")?.appendChild(container);
}

//testing
const testProduct: Product = {
  name: "Wireless Headphones",
  image: "https://example.com/images/wireless-headphones.jpg",
  price: 99.99,
  description:
    "High-quality wireless headphones with noise cancellation and long battery life.",
};

showProduct(testProduct);

/*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
function presentStudents(students: Student[]) {
  students.forEach((student) => {
    let container = document.createElement("div");
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    container.innerHTML = `<h4>${student.name}</h4>
    <span>Handed in on time:</span>`;

    container.appendChild(checkbox);

    if (student.handedInOnTime) {
      checkbox.checked = true;
    }

    document.getElementById("app")?.appendChild(container);
  });
}

//testing
const testStudents: Student[] = [elin, lukas];
presentStudents(testStudents);

/*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */

let words: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet"];

function concatenateStrings(words: string[]) {
  return words.join(" ");
}

//testing:
console.log(concatenateStrings(words));

/* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
interface User {
  name: string;
  birthDate: Date;
  avatar: string;
  email: string;
  password: string;
}

function isAdult(birthDate: Date, minAge = 20): boolean {
  const age = new Date().getFullYear() - birthDate.getFullYear();
  return age >= minAge;
}

function createUser(user: User) {
  if (!isAdult(user.birthDate)) {
    console.log("Du är under 20 år!"); //line included to allow testing
    return "Du är under 20 år!";
  }
  // insert logik för att skapa användare here
  console.log("Nu är du en användare"); //line included to allow testing
}

//testing
let date: Date = new Date("1995-04-06");
const elinUser: User = {
  name: "Elin",
  birthDate: date,
  avatar: "image.jpg",
  email: "mejl",
  password: "passW123",
};

createUser(elinUser);
