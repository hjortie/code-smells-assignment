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
const lukas = new Student("Lukas", false, false);

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

const testProduct: Product = {
  name: "Wireless Headphones",
  image: "https://example.com/images/wireless-headphones.jpg",
  price: 99.99,
  description:
    "High-quality wireless headphones with noise cancellation and long battery life.",
};

function showProduct(product: Product) {
  let container = document.createElement("div");

  container.innerHTML = `<h4>${product.name}</h4>
  <img src="${product.image}" alt="${product.name}"/>
        <strong>${product.price} USD</strong>
        <p>${product.description}</p>`;
  document.getElementById("app")?.appendChild(container);
}

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

const testStudents: Student[] = [elin, lukas];

presentStudents(testStudents);
