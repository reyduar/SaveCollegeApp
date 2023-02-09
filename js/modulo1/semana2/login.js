const userTest = {
  username: "test",
  password: "123",
};

const fm = document.getElementById("loginForm");
fm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = {
    username: fm.elements[0].value,
    password: fm.elements[1].value,
  };

  handleSubmit(form);
});

const handleSubmit = ({ username, password }) => {
  if (userTest.username === username && userTest.password === password) {
    alert("Logado");
    window.location.replace("https://reyduar.github.io/SaveCollegeApp/");
  } else {
    alert("Credenciais incorretas!");
  }
};
