const generateHtmlGithubLink = () => {
  const linkName = "Github Repositório dos exercicios do Módulo 1 - Semana 01";
  const contenerApp = document.querySelector("#ex4");
  contenerApp.innerHTML = `
  <a href="https://github.com/reyduar/SaveCollegeApp" target="_blank">${linkName}</a>
  <div style="margin-top: 50px"></div>
  `;
};

generateHtmlGithubLink();
