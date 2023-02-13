const setPriceFromPrompt = (product) => {
  let price = parseFloat(prompt(`Insira o preço do produto ${product}:`));
  if (isNaN(price)) {
    setPriceFromPrompt(product);
  }

  return price;
};

const setClientCashFromPrompt = (total) => {
  let cash = parseFloat(
    prompt(`Insira o valor em dinheiro que o cliente forneceu:`)
  );
  if (isNaN(cash)) {
    setClientCashFromPrompt(total);
  }
  return cash;
};

const inputPriceProduct = () => {
  let product = 1;
  let price = setPriceFromPrompt(product);
  let total = 0;
  let results = `### Lojas Tabajara ### \n`;
  results += `========================= \n`;
  while (price > 0) {
    total += price;
    results += `+ Produto ${product}: R$ ${price}\n`;
    product += 1;
    price = setPriceFromPrompt(product);
  }

  alert("Final da compra");
  let cash = setClientCashFromPrompt(total);
  while (total > cash) {
    cash = setClientCashFromPrompt(total);
  }

  results += `========================= \n`;
  results += `Total: R$ ${total}\n`;
  results += `Dinheiro: R$ ${cash}\n`;
  results += `Troco: R$ ${cash - total}\n`;
  results += `========================= \n`;
  alert(results);
};

function padariaTechPlusInit() {
  document.querySelector("#m1s2ex8").innerHTML = `
        <button type="button" onclick="inputPriceProduct()">Caixa Registradora</button>
        `;
}

padariaTechPlusInit();
