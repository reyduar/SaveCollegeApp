const students = [
  {
    name: "Cesar",
    room: "Pantanal",
    age: 20,
    gender: "feminino",
    height: 1.87,
  },
  {
    name: "Cynthia",
    room: "Coqueiros",
    age: 45,
    gender: "masculino",
    height: 1.5,
  },
  {
    name: "Daniel",
    room: " Itaguaçu",
    age: 62,
    gender: "masculino",
    height: 1.7,
  },
  {
    name: "Andressa",
    room: "Palhoça",
    age: 80,
    gender: "masculino",
    height: 1.45,
  },
  {
    name: "Camila",
    room: "Trindade",
    age: 5,
    gender: "masculino",
    height: 1.55,
  },
];

const consoleReport = () => {
  students.forEach((student) => {
    console.log("====================================");
    console.log(`Nome: ${student.name}`);
    console.log(`Sala: ${student.room}`);
    console.log(`Idade: ${student.age}`);
    console.log(`Sexo: ${student.gender}`);
    console.log(`Altura: ${student.height}`);
    console.log("====================================");
  });
};

const htmlReport = () => {
  let listItem = "";
  students.forEach((student) => {
    listItem += `
    <li>
      <hr />
      <p>Nome: ${student.name}</p>
      <p>Sala: ${student.room}</p>
      <p>Idade: ${student.age}</p>
      <p>Sexo: ${student.gender}</p>
      <p>Altura: ${student.height}</p>
    </li>
    `;
  });
  const contenerApp = document.querySelector("#ex1");
  contenerApp.innerHTML = `<ul>${listItem}</ul>`;
};

function showStudentsList() {
  consoleReport();
  htmlReport();
}

// run exercice
showStudentsList();
