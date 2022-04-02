function selectDish(food) {
  const botao = document.querySelector(".dish.checked");
  let price = food.children[3];

  if (botao !== null) {
    price = botao.children[3];

    botao.classList.remove("checked");
    price.className = price.className.slice(0, -8);
  }
  if (food !== botao) {
    price = food.children[3];
    food.classList.add("checked");
    price.className += "-checked";
  }
  checkList();
}

function selectDrink(food) {
  const botao = document.querySelector(".drink.checked");
  let price = food.children[3];

  if (botao !== null) {
    price = botao.children[3];

    botao.classList.remove("checked");
    price.className = price.className.slice(0, -8);
  }
  if (food !== botao) {
    price = food.children[3];
    food.classList.add("checked");
    price.className += "-checked";
  }
  checkList();
}

function selectDissert(food) {
  const botao = document.querySelector(".dissert.checked");
  let price = food.children[3];

  if (botao !== null) {
    price = botao.children[3];

    botao.classList.remove("checked");
    price.className = price.className.slice(0, -8);
  }
  if (food !== botao) {
    price = food.children[3];
    food.classList.add("checked");
    price.className += "-checked";
  }
  checkList();
}

function checkList() {
  const button = document.querySelector(".button");
  const h3 = button.firstElementChild;

  if (checkButtons()) {
    button.style.backgroundColor = "#32B72F";
    console.log(button);
    h3.innerHTML = "Fechar pedido";
    h3.style.fontWeight = "700";
  } else {
    button.style.backgroundColor = "#CBCBCB";
    h3.innerHTML = "Selecione os 3 itens <br> para fechar o pedido";
    h3.style.fontWeight = "400";
  }
}

function checkButtons() {
  const botao = document.querySelector(".dish.checked");
  const botao2 = document.querySelector(".drink.checked");
  const botao3 = document.querySelector(".dissert.checked");
  if (botao !== null && botao2 !== null && botao3 !== null) {
    return true;
  }
  return false;
}

function zapButton() {
  if (checkButtons()) {
    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70`;
    const URL = "https://wa.me/5581982411222?text=";
    const encode = encodeURIComponent(mensagem);
    console.log(encode);

    window.open(URL + encode, "_blank");
  }
}
