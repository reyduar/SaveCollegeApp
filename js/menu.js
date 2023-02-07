function menuOnclick(value) {
  document.querySelector("#semana1").style.display = "none";
  document.querySelector("#semana2").style.display = "none";
  document.querySelector(`#${value}`).style.display = "block";
}
const menu = () => {
  document.querySelector("#semana1").style.display = "block";
  document.querySelector("#semana2").style.display = "none";
  const menu = document.querySelector("#menu");
  menu.innerHTML = `
  <button type="button" onclick="menuOnclick('semana1')">Semana 1</button> 
  <button type="button" onclick="menuOnclick('semana2')">Semana 2</button>`;
};

menu();
