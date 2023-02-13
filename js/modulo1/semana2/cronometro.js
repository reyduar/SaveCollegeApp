const renderTimer = (value) =>
  (document.querySelector("#timerEx5").innerText = value);

const chronometer = () => {
  let counter = 1;
  renderTimer(counter);
  const timer = setInterval(
    (value) => {
      counter = counter + value;
      if (counter > 10) {
        alert("Seu tempo acabou!! Tente novamente!!");
        clearInterval(timer);
      } else {
        renderTimer(counter);
      }
    },
    1000,
    1
  );
};

const renderChronometer = () => {
  const m1s2ex5 = document.querySelector("#m1s2ex5");
  const htmlChron = `
    <button type="button" onclick="chronometer()">Cronômetro</button>
    `;
  m1s2ex5.innerHTML = htmlChron;
};

renderChronometer();
