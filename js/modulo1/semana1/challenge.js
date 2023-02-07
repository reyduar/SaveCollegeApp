const newStudentsList = [];

const setStudentName = () => {
  return prompt("Insira o nome do alumno ou insira 'fim' para finalizar:");
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
  return note / total;
};

const getStudentsReport = () => {
  let report = "";
  if (!!newStudentsList.length) {
    report += "==================================== \n";
    newStudentsList.forEach((student) => {
      report += `Nome: ${student?.name}  \n`;
      report += `Note: ${student?.calification}  \n`;
      report += "====================================  \n";
    });
    report += `A média das notas e: ${getStudentsAverage()}`;
  } else {
    report = "Nenhum aluno foi inserido";
  }

  return report;
};

function main() {
  const name = setStudentName();
  if (name === "fim" || name == null || name.length === 0) {
    alert(getStudentsReport());
  } else {
    const calification = setStudentCalification();
    const newStudent = {
      name: name || null,
      calification: parseInt(calification) || 0,
    };
    saveStudent(newStudent);
  }
}

const challengeHtml = () => {
  const contenerApp = document.querySelector("#challenge");
  contenerApp.innerHTML = `<button type="button" onclick="main()">Inserir aluno e nota</button>`;
};

// run exercise
challengeHtml();
