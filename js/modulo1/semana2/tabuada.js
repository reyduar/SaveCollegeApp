const renderTable = () => {
  const number = prompt(
    "Insira o numero que deseja ver a tabuada entre 1 a 10:"
  );
  if (number >= 1 && number <= 10) {
    const results = createMultiplicationTable(number);
    const table = document.querySelector("#table");
    table.innerHTML = results;
  } else {
    alert("Insira um numero entre 1 e 10");
  }
};

const createMultiplicationTable = (value) => {
  let tableResult = `<p>## Tabuada de ${value} ##</p>`;
  for (let i = 1; i <= 10; i++) {
    let multiplication = i * value;
    tableResult += `<p>${i} x ${value} = ${multiplication}</p>`;
  }

  return tableResult;
};

const renderButtonTable = () => {
  const m1s2ex6 = document.querySelector("#m1s2ex6");
  const htmlButtonTable = `
      <button type="button" onclick="renderTable()">Criar Tabuada de Multiplicação</button>
      `;
  m1s2ex6.innerHTML = htmlButtonTable;
};

renderButtonTable();
