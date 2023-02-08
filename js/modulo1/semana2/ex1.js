const studentsList4 = [
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

const getStudentFinalReport = (student) => {
  let target = "Reprovado";
  if (student.math >= 7) {
    target = "Aprovado";
  }
  return `${student.name} -> ${target}`;
};

const consoleStudentFinalReport = () => {
  console.log("=====[M1S02]Ex1 - Estruturas de repetição=====");
  studentsList4.forEach((student) => {
    console.log(getStudentFinalReport(student));
  });
  console.log();
  console.log("==============================================");
};

const htmlReportFinalReport = () => {
  let listItem = "";
  studentsList4.forEach((student) => {
    listItem += `
      <li>
        <hr />
        <p>${getStudentFinalReport(student)}</p>
      </li>
      `;
  });
  const contenerApp = document.querySelector("#m1s2ex1");
  contenerApp.innerHTML = `<ul>${listItem}</ul>`;
};

const printStudentFinalReport = () => {
  consoleStudentFinalReport();
  htmlReportFinalReport();
};
// run exercise
printStudentFinalReport();
