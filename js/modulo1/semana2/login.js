const userTest = {
  username: "test",
  password: "123",
};

const setUserInformation = (user) => {
  localStorage.setItem("userCollege", JSON.stringify(user));
};

const getUserInformation = () => {
  return JSON.parse(localStorage.getItem("userCollege"));
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
    setUserInformation({ username, password });
    alert("Logado");
    window.location.replace("https://reyduar.github.io/SaveCollegeApp/");
  } else {
    alert("Credenciais incorretas!");
  }
};

function login() {
  const user = getUserInformation();
  if (user) {
    if (
      userTest.username === user.username &&
      userTest.password === user.password
    ) {
      window.location.replace("https://reyduar.github.io/SaveCollegeApp/");
    }
  }
}

login();
