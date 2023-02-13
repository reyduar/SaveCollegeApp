const inputPrice = () => {
  const price = prompt("Preço do pão:");
  let results = `<h3>Panificadora Pão de Ontem - Tabela de preços</h3>`;
  for (let i = 1; i <= 50; i++) {
    let item = i * price;
    results += `<p>${i} - R$ ${item.toFixed(2)}</p>`;
  }
  const pricesList = document.querySelector("#pricesList");
  pricesList.innerHTML = results;
};

const renderShowPricesButton = () => {
  const m1s2ex7 = document.querySelector("#m1s2ex7");
  const htmlShowPrices = `
      <button type="button" onclick="inputPrice()">Criar tabela de preços de pães</button>
      `;
  m1s2ex7.innerHTML = htmlShowPrices;
};

renderShowPricesButton();
