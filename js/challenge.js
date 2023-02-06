const newStudentsList = [];

const setStudentName = () => {
  return prompt("Insira o nome do alumno ou fim para finalizar:");
};

const setStudentCalification = () => {
  return prompt("Insira a nota do alumno:");
};

const saveStudent = (value) => {
  newStudentsList.push(value);
  main();
};

const getStudentsAverage = () => {
  const total = newStudentsList.length;
  let note = 0;
  newStudentsList.forEach((student) => {
    note += student.calification;
  });
  console.log("====================================");
  console.log(note);
  console.log("====================================");
  console.log("====================================");
  console.log(total);
  console.log("====================================");
  return note / total;
};

const getStudentsReport = () => {
  let report = "";
  report += "==================================== \n";
  newStudentsList.forEach((student) => {
    report += `Nome: ${student?.name}  \n`;
    report += `Note: ${student?.calification}  \n`;
    report += "====================================  \n";
  });
  report += `A média das notas e: ${getStudentsAverage()}`;

  return report;
};

function main() {
  const name = setStudentName();
  if (name !== "fim") {
    const calification = setStudentCalification();
    const newStudent = {
      name: name || null,
      calification: parseInt(calification) || 0,
    };
    saveStudent(newStudent);
  } else {
    alert(getStudentsReport());
  }
}

const challengeHtml = () => {
  const contenerApp = document.querySelector("#challenge");
  contenerApp.innerHTML = `<button type="button" onclick="main()">Inserir aluno e nota</button>`;
};

// run exercise
challengeHtml();
