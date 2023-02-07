const studentsList3 = [
  {
    name: "Cesar",
    room: "Pantanal",
    age: 20,
    gender: "feminino",
    height: 1.87,
    math: 1,
  },
  {
    name: "Cynthia",
    room: "Coqueiros",
    age: 45,
    gender: "masculino",
    height: 1.5,
    math: 9,
  },
  {
    name: "Daniel",
    room: " Itaguaçu",
    age: 62,
    gender: "masculino",
    height: 1.7,
    math: 7,
  },
  {
    name: "Andressa",
    room: "Palhoça",
    age: 80,
    gender: "masculino",
    height: 1.45,
    math: 8,
  },
  {
    name: "Camila",
    room: "Trindade",
    age: 5,
    gender: "masculino",
    height: 1.55,
    math: 5,
  },
];

const getStudentReport = (student) => {
  const target = student.math > 7 ? "Aprovado" : "Reprovado";
  return `${student.name} -> ${target}`;
};

const htmlReport = () => {
  let listItem = "";
  studentsList3.forEach((student) => {
    listItem += `
    <li>
      <hr />
      <p>${getStudentReport(student)}</p>
    </li>
    `;
  });
  const contenerApp = document.querySelector("#ex3");
  contenerApp.innerHTML = `<ul>${listItem}</ul>`;
};

const printStudentReport = () => {
  htmlReport();
};
// run exercise
printStudentReport();
