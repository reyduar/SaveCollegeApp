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

function menuOnclick(value) {
  document.querySelector("#semana1").style.display = "none";
  document.querySelector("#semana2").style.display = "none";
  document.querySelector(`#${value}`).style.display = "block";
}
const menu = () => {
  const { username } = getUserInformation();
  const userLogged = username
    ? `<h4>Usuário logado: ${username}</h4><br/>`
    : ``;

  const buttonLogin = !username
    ? `<button type="button" onclick="goToLoginPage()">Login Page</button>`
    : ``;

  const buttonLogout = username
    ? `<button type="button" onclick="goToLoginPage()">Logout</button>`
    : ``;
  document.querySelector("#semana1").style.display = "block";
  document.querySelector("#semana2").style.display = "none";
  const menu = document.querySelector("#menu");
  menu.innerHTML = `
  ${userLogged}
  ${buttonLogin}
  ${buttonLogout}
  <button type="button" onclick="menuOnclick('semana1')">Semana 1</button> 
  <button type="button" onclick="menuOnclick('semana2')">Semana 2</button>`;
};

menu();
