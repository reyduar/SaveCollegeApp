const mockUser = {
  nome: "test",
  email: "test@test.com",
  url: "https://www.w3schools.com/howto/img_avatar.png",
};

const setUserValues = (user) => {
  document.querySelector("#imgUser").src = user.url;
  document.querySelector("#txtUrl").value = user.url;
  document.querySelector("#txtName").value = user.nome;
  document.querySelector("#txtEmail").value = user.email;
};

const saveUser = (user) => {
  localStorage.setItem("userDetails", JSON.stringify(user));
};

const getUserInformation = () => {
  return JSON.parse(localStorage.getItem("userDetails"));
};

const fm = document.getElementById("userForm");
fm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = {
    url: fm.elements[0].value,
    nome: fm.elements[1].value,
    email: fm.elements[2].value,
  };

  handleSubmit(form);
});

const handleSubmit = (user) => {
  if (user.url && user.nome && user.email) {
    saveUser(user);
    alert("Os dados do usuário foram salvos com sucesso!");
    setUserValues(user);
  } else {
    alert("Insira os dados necessários.");
  }
};

function init() {
  const user = getUserInformation();
  if (user) {
    setUserValues(user);
  } else {
    setUserValues(mockUser);
  }
}

init();
