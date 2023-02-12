const getUserInformation = () => {
  return JSON.parse(localStorage.getItem("userCollege"));
};

const logout = () => {
  localStorage.removeItem("userCollege");
};

function goToLoginPage() {
  logout();
  window.location.replace(
    "https://reyduar.github.io/SaveCollegeApp/login.html"
  );
}

function goToUserPage() {
  window.location.replace(
    "https://reyduar.github.io/SaveCollegeApp/views/user.html"
  );
}

function menuOnclick(value) {
  document.querySelector("#semana1").style.display = "none";
  document.querySelector("#semana2").style.display = "none";
  document.querySelector(`#${value}`).style.display = "block";
}
const menu = () => {
  const user = getUserInformation();
  const userLogged = user?.username
    ? `<h4>Usuário logado: ${username}</h4><br/>`
    : ``;

  const buttonLogin = !user?.username
    ? `<button type="button" onclick="goToLoginPage()">Login Page</button>`
    : ``;

  const buttonLogout = user?.username
    ? `<button type="button" onclick="goToLoginPage()">Logout</button>`
    : ``;
  document.querySelector("#semana1").style.display = "none";
  document.querySelector("#semana2").style.display = "block";
  const menu = document.querySelector("#menu");
  menu.innerHTML = `
  ${userLogged}
  ${buttonLogin}
  ${buttonLogout}
  <button type="button" onclick="menuOnclick('semana1')">Semana 1</button> 
  <button type="button" onclick="menuOnclick('semana2')">Semana 2</button>`;
};

const renderEx2 = () => {
  const m1s2ex2 = document.querySelector("#m1s2ex2");
  m1s2ex2.innerHTML = `<button type="button" onclick="goToLoginPage()">Criar Login</button>`;
};

const renderEx3 = () => {
  const m1s2ex3 = document.querySelector("#m1s2ex3");
  const user = getUserInformation();
  const userLogged = user?.username
    ? `<h4>Usuário logado: ${username}</h4><br/>`
    : ``;

  const buttonLogin = !user?.username
    ? `<button type="button" onclick="goToLoginPage()">Login</button>`
    : ``;

  const buttonLogout = user?.username
    ? `<button type="button" onclick="goToLoginPage()">Logout</button>`
    : ``;
  const htmlEx3 = `
  ${userLogged}
  ${buttonLogin}
  ${buttonLogout}
  `;
  m1s2ex3.innerHTML = htmlEx3;
};

const renderEx4 = () => {
  const m1s2ex4 = document.querySelector("#m1s2ex4");
  const htmlEx4 = `
  <button type="button" onclick="goToUserPage()">Editar usuário</button>
  `;
  m1s2ex4.innerHTML = htmlEx4;
};

menu();
renderEx2();
renderEx3();
renderEx4();
