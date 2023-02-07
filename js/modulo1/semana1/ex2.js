const studentsList2 = [
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

const getAverage = () => {
  const total = studentsList2.length;
  let note = 0;
  studentsList2.forEach((student) => {
    note += student.math;
  });

  return note / total;
};

const htmlAverage = () => {
  const avg = getAverage();

  const contenerApp = document.querySelector("#ex2");
  contenerApp.innerHTML = `<p>Media da lista dos alunos: ${avg}</p>`;
};

const printAverage = () => {
  console.log("================Average=============");
  console.log(getAverage());
  console.log("====================================");
  htmlAverage();
};
// run exercise
printAverage();
