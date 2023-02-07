const htmlGithubLink = () => {
  const linkName = "Github Repositório";
  const repo = document.querySelector("#repo");
  repo.innerHTML = `
  <a href="https://github.com/reyduar/SaveCollegeApp" target="_blank">${linkName}</a>
  <div style="margin-top: 50px"></div>
  `;
};

htmlGithubLink();
